const taskUtil = require('../../common/taskUtil');

const tasks = [];

/**
 * Returns an array of tasks
 * @returns {Array}
 */
const getAll = async () => tasks;

/**
 * Saves the accepted task and returns it
 * @param {Object} task 
 * @returns {Object}
 */
const save = async (task) => {
  tasks.push(task);
  return task;
};

/**
 * Searches for a task with an accepted id in array and returns it
 * @param {string} id 
 * @returns {Object}
 */
const find = async (id) => tasks.find((task) => task.id === id);

/**
 * Updates the board with the accepted id and returns it
 * @param {Object} task 
 * @returns {Object}
 */
const update = async (task) => {
  tasks.splice(taskUtil.findIndex(task.id, tasks), 1, task);
  return task;
};

/**
 * Searches for a task with an accepted id in array and deletes it
 * @param {string} id 
 */
const remove = async (id) => {
  tasks.splice(taskUtil.findIndex(id, tasks), 1);
};

/**
 * Searches for a tasks with an assigned boardId in array and deletes them
 * @param {string} boardId 
 */
const removeWithBoard = async (boardId) => {
  const arrOfId = taskUtil.findByBoardId(boardId, tasks);
  for (let i = 0; i < arrOfId.length; i += 1) {
    tasks.splice(taskUtil.findIndex(arrOfId[i], tasks), 1);
  }
};

/**
 * Searches for a tasks with an assigned userId in array and returns them
 * @param {string} userId 
 * @returns {Array}
 */
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
