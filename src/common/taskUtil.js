const Task = require('../resources/tasks/task.model');

/**
 * Creates a new object of class Task and returns it
 * @param {Object} newTask 
 * @returns {Object}
 */
function toTask(newTask) {
  return new Task(newTask);
}

/**
 * Accepts two objects: one to be updated and an object with properties to be updated
 * @param {Object} task 
 * @param {Object} updateTask 
 */
function toUpdateTask(task, updateTask) {
  task.title = updateTask.title;
  task.order = updateTask.order;
  task.description = updateTask.description;
  task.userId = updateTask.userId;
  task.boardId = updateTask.boardId;
  task.columnId = updateTask.columnId;
}

/**
 * Returns the index of the object in the received array by the received id
 * @param {string} id 
 * @param {Array} tasks 
 * @returns {Number}
 */
function findIndex(id, tasks) {
  return tasks.findIndex((task) => task.id === id);
}

/**
 * Returns an array of tasks assigned to the accepted boardId
 * @param {string} boardId 
 * @param {Array} tasks 
 * @returns {Array}
 */
function findByBoardId(boardId, tasks) {
  return tasks.filter((task) => task.boardId === boardId);
}

/**
 * Returns an array of tasks assigned to the accepted UserId
 * @param {string} userId 
 * @param {Object} tasks 
 * @returns {Object}
 */
function findByUserId(userId, tasks) {
  return tasks.filter((task) => task.userId === userId);
}

module.exports = {
  toTask,
  toUpdateTask,
  findIndex,
  findByBoardId,
  findByUserId,
};
