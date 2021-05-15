const taskUtil = require('../../common/taskUtil');

const tasks = [];

const getAll = async () => tasks;

const save = async (task) => {
  tasks.push(task);
  return task;
};

const find = async (id) => tasks.find((task) => task.id === id);

const update = async (task) => {
  tasks.splice(taskUtil.findIndex(task.id, tasks), 1, task);
  return task;
};

const remove = async (id) => {
  tasks.splice(taskUtil.findIndex(id, tasks), 1);
};

module.exports = { getAll, save, find, update, remove };
