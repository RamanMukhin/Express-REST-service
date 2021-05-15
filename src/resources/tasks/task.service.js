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

const removeWithBoard = (boardId) => tasksRepo.removeWithBoard(boardId);

const updateWithUser = async (userId) => {
  const arrOfTasks = await tasksRepo.findTasks(userId);
  for (let i = 0; i < arrOfTasks.length; i += 1) {
    const task = await tasksRepo.find(arrOfTasks[i].id);
    task.userId = null;
    tasksRepo.update(task);
  }
};

module.exports = {
  getAll,
  create,
  find,
  update,
  remove,
  removeWithBoard,
  updateWithUser,
};
