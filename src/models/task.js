const mongoose = require("../db/mongoose");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, {
  timestamps: true
});

taskSchema.pre("save", async function (next) {
  const task = this;

  next();
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
