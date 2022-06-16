const TaskModel = require('../model/taskModel/taskModel');

exports.getAllTasksData = async (_req, res) => {
  const allTasks = await TaskModel.find({ status: false });
  res.send({ dados: allTasks });
};

exports.createTaskData = async (req, res) => {
  const { description } = req.body;

  await TaskModel.create({
    description,
  });

  res.status(201).send({ saved: true });
};

exports.deleteTaskData = async (req, res) => {
  const { id } = req.params;

  await TaskModel.deleteOne({ _id: id });

  res.status(204).end();
};

exports.updateTaskData = async (req, res) => {
  const { id } = req.params;

  await TaskModel.updateOne({ _id: id }, { status: true });

  res.end();
};
