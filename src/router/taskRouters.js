const express = require('express');
const { getAllTasksData, createTaskData } = require('../controller/tasks');
const taskRouters = express.Router();

taskRouters.get('/', getAllTasksData);
taskRouters.post('/', createTaskData);

module.exports = taskRouters;
