const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    id: {
      primaryKey: true,
      type: Number,
    },
    description: String,
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model('tasks', taskSchema);
