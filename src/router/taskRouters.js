const express = require('express');
const {
  getAllTasksData,
  createTaskData,
  deleteTaskData,
  updateTaskData,
} = require('../controller/tasks');
const taskRouters = express.Router();

taskRouters.get('/', getAllTasksData);
taskRouters.post('/', createTaskData);
taskRouters.delete('/:id', deleteTaskData);
taskRouters.put('/:id', updateTaskData);

module.exports = taskRouters;
