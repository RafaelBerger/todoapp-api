const express = require('express');
const {
  getAllTasksData,
  createTaskData,
  deleteTaskData,
} = require('../controller/tasks');
const taskRouters = express.Router();

taskRouters.get('/', getAllTasksData);
taskRouters.post('/', createTaskData);
taskRouters.delete('/:id', deleteTaskData);

module.exports = taskRouters;
