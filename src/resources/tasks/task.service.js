const tasksRepo = require('./task.memory.repository');
const taskUtil = require('../../common/taskUtil');

/**
 * Calls a function from the repository and returns an array of found tasks
 * @returns {Array}
 */
const getAll = () => tasksRepo.getAll();

/**
 * Creates a new task, calls the repository function to save this new task, returns it
 * @param {Object} newTask 
 * @returns {Object}
 */
const create = (newTask) => {
  const task = taskUtil.toTask(newTask);
  return tasksRepo.save(task);
};

/**
 * Calls a function from the repository, passing the id to it, returns the found task
 * @param {string} id 
 * @returns {Object}
 */
const find = (id) => tasksRepo.find(id);

/**
 * Accepts the id of the object to update and an object with parameters to update. Returns the updated task
 * @param {string} id 
 * @param {Object} updateTask 
 * @returns {Object}
 */
const update = async (id, updateTask) => {
  const task = await tasksRepo.find(id);
  taskUtil.toUpdateTask(task, updateTask);
  return tasksRepo.update(task);
};

/**
 * Calls a function from the repository to delete a task. returns it
 * @param {string} id 
 */
const remove = (id) => {
  tasksRepo.remove(id);
};

/**
 * Calls a function from the repository to delete a task assigned to the accepted boardId
 * @param {string} boardId 
 */
const removeWithBoard = (boardId) => {
  tasksRepo.removeWithBoard(boardId);
};

/**
 * Calls a function from the repository to update a task assigned to the accepted UserId
 * @param {string} userId 
 */
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
