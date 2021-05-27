"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTasks = exports.removeWithBoard = exports.remove = exports.update = exports.find = exports.save = exports.getAll = void 0;
const taskUtil_1 = require("../../common/taskUtil");
const tasks = [];
/**
 * Returns the array of tasks
 * @returns {Array} array of tasks
 */
const getAll = async () => tasks;
exports.getAll = getAll;
/**
 * Saves and returns given task
 * @param {Object} task given task
 * @returns {Object} task
 */
const save = async (task) => {
    tasks.push(task);
    return task;
};
exports.save = save;
/**
 * Searches and returns task by given id
 * @param {string} id given id
 * @returns {Object} task
 */
const find = async (id) => tasks.find((task) => task.id === id);
exports.find = find;
/**
 * Updates and returns the task with the given id
 * @param {Object} task task to update
 * @returns {Object} task
 */
const update = async (task) => {
    tasks.splice(taskUtil_1.findIndex(task.id, tasks), 1, task);
    return task;
};
exports.update = update;
/**
 * Deletes task by given id
 * @param {string} id given id
 */
const remove = async (id) => {
    tasks.splice(taskUtil_1.findIndex(id, tasks), 1);
};
exports.remove = remove;
/**
 * delettes tasks with given boardId
 * @param {string} boardId given boardId
 */
const removeWithBoard = async (boardId) => {
    const arrayTaskWithBoardId = taskUtil_1.findByBoardId(boardId, tasks);
    for (let i = 0; i < arrayTaskWithBoardId.length; i += 1) {
        const { id } = arrayTaskWithBoardId[i];
        tasks.splice(taskUtil_1.findIndex(id, tasks), 1);
    }
};
exports.removeWithBoard = removeWithBoard;
/**
 * Searches tasks with given userId
 * @param {string} userId given userId
 * @returns {Array} array of tasks
 */
const findTasks = async (userId) => taskUtil_1.findByUserId(userId, tasks);
exports.findTasks = findTasks;
