import * as tasksRepo from './task.memory.repository.js';
import { toTask, toUpdateTask } from '../../common/taskUtil.js';
/**
 * Returns all tasks
 * @returns {Array} array of tasks
 */
const getAll = () => tasksRepo.getAll();
/**
 * Creates and returns a new task
 * @param {Object} newTask task create from
 * @returns {Object} new task
 */
const create = (newTask) => {
    const task = toTask(newTask);
    return tasksRepo.save(task);
};
/**
 * Returns the task by given id
 * @param {string} id given id
 * @returns {Object} the task
 */
const find = (id) => tasksRepo.find(id);
/**
 * Updates the task by given id
 * @param {string} id given id
 * @param {Object} updateTask task update from
 * @returns {Object} the task
 */
const update = async (id, updateTask) => {
    const task = (await tasksRepo.find(id));
    toUpdateTask(task, updateTask);
    return tasksRepo.update(task);
};
/**
 * Deletes task by given id
 * @param {string} id given id
 */
const remove = (id) => {
    tasksRepo.remove(id);
};
/**
 * Deletes tasks by given boardId
 * @param {string} boardId given boardId
 */
const removeWithBoard = (boardId) => {
    tasksRepo.removeWithBoard(boardId);
};
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
export { getAll, create, find, update, remove, removeWithBoard, updateWithUser, };
