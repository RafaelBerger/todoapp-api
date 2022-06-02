const TaskModel = require('../model/taskModel/taskModel');

exports.getAllTasksData = async (_req, res) => {
  const allTasks = await TaskModel.find({});
  res.send({ dados: allTasks });
};

exports.createTaskData = async (req, res) => {
  const { description } = req.body;

  await TaskModel.create({
    description,
  });

  res.send({ saved: true });
};

exports.deleteTaskData = async (req, res) => {
  const { id } = req.params;

  await TaskModel.deleteOne({ _id: id });

  res.end();
};
