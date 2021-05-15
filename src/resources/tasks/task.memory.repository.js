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

const removeWithBoard = async (boardId) => {
  const arrOfId = taskUtil.findByBoardId(boardId, tasks);
  for (let i = 0; i < arrOfId.length; i += 1) {
    tasks.splice(taskUtil.findIndex(arrOfId[i], tasks), 1);
  }
};

const findTasks = async (userId) => taskUtil.findByUserId(userId, tasks);

module.exports = {
  getAll,
  save,
  find,
  update,
  remove,
  removeWithBoard,
  findTasks,
};
