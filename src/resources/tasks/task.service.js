const tasksRepo = require('./task.memory.repository');
const taskUtil = require('../../common/taskUtil');

const getAll = () => tasksRepo.getAll();

const create = (newTask) => {
  const task = taskUtil.toTask(newTask);
  return tasksRepo.save(task);
};

const find = (id) => tasksRepo.find(id);

const update = async (id, updateTask) => {
  let task = await tasksRepo.find(id);
  task = taskUtil.toUpdateTask(task, updateTask);
  return tasksRepo.update(task);
};

const remove = (id) => tasksRepo.remove(id);

module.exports = { getAll, create, find, update, remove };
