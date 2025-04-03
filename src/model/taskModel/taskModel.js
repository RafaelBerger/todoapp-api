const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    id: Number,
    description: String,
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model('Task', taskSchema);
