const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    todo: String,
    due: String,
    status: {
      type: String,
      enum: ["DONE", "PENDING", "FAILED"],
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = {
  model: mongoose.model("graphqlTodo", schema),
};
