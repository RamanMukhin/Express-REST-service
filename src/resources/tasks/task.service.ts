import * as tasksRepo from './task.memory.repository.js';
import { toTask, toUpdateTask, ITask } from '../../common/taskUtil.js';

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
const create = (newTask: ITask) => {
  const task = toTask(newTask);
  return tasksRepo.save(task);
};

/**
 * Returns the task by given id
 * @param {string} id given id
 * @returns {Object} the task
 */
const find = (id: string) => tasksRepo.find(id);

/**
 * Updates the task by given id
 * @param {string} id given id
 * @param {Object} updateTask task update from
 * @returns {Object} the task
 */
const update = async (id: string, updateTask: ITask) => {
  const task = (await tasksRepo.find(id))!;
  toUpdateTask(task, updateTask);
  return tasksRepo.update(task);
};

/**
 * Deletes task by given id
 * @param {string} id given id
 */
const remove = (id: string) => {
  tasksRepo.remove(id);
};

/**
 * Deletes tasks by given boardId
 * @param {string} boardId given boardId
 */
const removeWithBoard = (boardId: string) => {
  tasksRepo.removeWithBoard(boardId);
};

/**
 * Updates tasks assigned to the accepted UserId
 * @param {string} userId given userId
 */
const updateWithUser = async (userId: string) => {
  const arrOfTasks = await tasksRepo.findTasks(userId);
  for (let i = 0; i < arrOfTasks.length; i += 1) {
    const task = arrOfTasks[i]!;
    task.userId = null;
    await tasksRepo.update(task);
  }
};

export {
  getAll,
  create,
  find,
  update,
  remove,
  removeWithBoard,
  updateWithUser,
};
