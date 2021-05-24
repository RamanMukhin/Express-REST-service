const Task = require('../resources/tasks/task.model');

/**
 * Creates and returns a new object of class Task
 * @param {Object} newTask taskDto
 * @returns {Object} new task
 */
function toTask(newTask) {
  return new Task(newTask);
}

/**
 * Updates given task object
 * @param {Object} task given task
 * @param {Object} updateTask task from update
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
 * Searches and returns the index of the object with given id
 * @param {string} id given id
 * @param {Array} tasks array for searching in
 * @returns {Number} the index of the object with given id
 */
function findIndex(id, tasks) {
  return tasks.findIndex((task) => task.id === id);
}

/**
 * Returns an array of tasks assigned to boardId
 * @param {string} boardId assigned boardId
 * @param {Array} tasks array of tasks
 * @returns {Array} array of task assigned to boardId
 */
function findByBoardId(boardId, tasks) {
  return tasks.filter((task) => task.boardId === boardId);
}

/**
 * Returns an array of tasks assigned to userId
 * @param {string} userId assigned boardId
 * @param {Array} tasks array of tasks
 * @returns {Array} array of task assigned to userId
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
