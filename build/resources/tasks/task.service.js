"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWithUser = exports.removeWithBoard = exports.remove = exports.update = exports.find = exports.create = exports.getAll = void 0;
const tasksRepo = __importStar(require("./task.memory.repository"));
const taskUtil_1 = require("../../common/taskUtil");
/**
 * Returns all tasks
 * @returns {Array} array of tasks
 */
const getAll = () => tasksRepo.getAll();
exports.getAll = getAll;
/**
 * Creates and returns a new task
 * @param {Object} newTask task create from
 * @returns {Object} new task
 */
const create = (newTask) => {
    const task = taskUtil_1.toTask(newTask);
    return tasksRepo.save(task);
};
exports.create = create;
/**
 * Returns the task by given id
 * @param {string} id given id
 * @returns {Object} the task
 */
const find = (id) => tasksRepo.find(id);
exports.find = find;
/**
 * Updates the task by given id
 * @param {string} id given id
 * @param {Object} updateTask task update from
 * @returns {Object} the task
 */
const update = async (id, updateTask) => {
    const task = (await tasksRepo.find(id));
    taskUtil_1.toUpdateTask(task, updateTask);
    return tasksRepo.update(task);
};
exports.update = update;
/**
 * Deletes task by given id
 * @param {string} id given id
 */
const remove = (id) => {
    tasksRepo.remove(id);
};
exports.remove = remove;
/**
 * Deletes tasks by given boardId
 * @param {string} boardId given boardId
 */
const removeWithBoard = (boardId) => {
    tasksRepo.removeWithBoard(boardId);
};
exports.removeWithBoard = removeWithBoard;
/**
 * Updates tasks assigned to the accepted UserId
 * @param {string} userId given userId
 */
const updateWithUser = async (userId) => {
    const arrOfTasks = await tasksRepo.findTasks(userId);
    for (let i = 0; i < arrOfTasks.length; i += 1) {
        const task = arrOfTasks[i];
        task.userId = null;
        await tasksRepo.update(task);
    }
};
exports.updateWithUser = updateWithUser;
