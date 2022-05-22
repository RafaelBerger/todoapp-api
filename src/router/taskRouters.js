const express = require('express');
const getAllTasks = require('../controller/tasks');
const taskRouters = express.Router();

taskRouters.get('/', getAllTasks);

module.exports = taskRouters;
