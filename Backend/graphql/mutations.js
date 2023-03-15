const Todo = require("../model/structure").model;

const mutations = {
  addTodo: async (_, { input }, { pubsub }) => {
    const newTodo = await Todo.create(input);
    pubsub.publish("todo", {
      todo: {
        mutation: "Create",
        data: newTodo,
      },
    });
    return {
      ...newTodo._doc,
      _id: newTodo._id.toString(),
    };
  },

  deleteTodo: async (_, { _id }, { pubsub }) => {
    const deleted = await Todo.findById(_id);
    if (!deleted) {
      throw new Error("No todo with ID found");
    }
    await Todo.findByIdAndDelete(_id);
    pubsub.publish("todo", {
      todo: {
        mutation: "Delete",
        data: deleted,
      },
    });
    return {
      ...deleted._doc,
    };
  },
  updateTodo: async (_, { input }) => {
    const { _id, ...body } = input;
    const todo = await Todo.findById(_id);
    if (!todo) {
      throw new Error("No entry found for the given ID");
    }
    const updated = await Todo.findOneAndUpdate(
      { _id: _id },
      { $set: body },
      { new: true }
    );
    return {
      ...updated._doc,
      id: updated._id.toString(),
    };
  },
};
module.exports = mutations;
