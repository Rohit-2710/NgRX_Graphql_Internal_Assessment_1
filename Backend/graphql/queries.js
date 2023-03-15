const Todo = require("../model/structure").model;

const queries = {
  todos: async () => {
    const todoavail = Todo.find();
    return (await todoavail).map((todo) => {
      return {
        ...todo._doc,
        _id: todo._id.toString(),
      };
    });
  },

  getTodo: async (_, { _id }) => {
    const todo = await Todo.findById(_id);
    if (!todo) {
      throw new Error("No Todo found for the given ID");
    }
    return {
      ...todo._doc,
      id: todo._id.toString,
    };
  },
};

module.exports = queries;
