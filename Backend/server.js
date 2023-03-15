const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dbCongfig = require("./config/databaseConfig");
const { ApolloServer } = require("apollo-server-express");
const { execute, subscribe } = require("graphql");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { PubSub } = require("graphql-subscriptions");
const { typeDefs, resolver } = require("./graphql");
const http = require("http");
const pubsub = new PubSub();

const SubResolver = {
  Subscription: {
    todo: {
      subscribe: () => pubsub.asyncIterator("todo"),
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers: [resolver, SubResolver],
  context: ({ req, connection }) => {
    if (connection) {
      return { pubsub };
    } else {
      return { req, pubsub };
    }
  },
});

async function runServer() {
  await server.start();
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  server.applyMiddleware({ app });
  const httpServer = http.createServer(app);
  const schema = makeExecutableSchema({
    typeDefs,
    reslovers: [resolver, SubResolver],
  });
  mongoose
    .connect(dbCongfig.url, {})
    .then(() => {
      console.log("Connected to MongoDB successfully");
      httpServer.listen({ port: 4000 }, (err) => {
        if (err) {
          console.log("Unable to start server: " + err.message);
          process.exit();
        }
        console.log("Server started successfully");

        new SubscriptionServer(
          {
            execute,
            subscribe,
            schema: schema,
            onConnect: () => console.log("Connected"),
          },
          { server: httpServer, path: server.graphqlPath }
        );
      });
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB: " + err.message);
      process.exit();
    });
}
runServer();
