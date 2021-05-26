import { Task } from './task.model.js';
import {
  findIndex,
  findByBoardId,
  findByUserId,
} from '../../common/taskUtil.js';

const tasks: Task[] = [];

/**
 * Returns the array of tasks
 * @returns {Array} array of tasks
 */
const getAll = async () => tasks;

/**
 * Saves and returns given task
 * @param {Object} task given task
 * @returns {Object} task
 */
const save = async (task: Task) => {
  tasks.push(task);
  return task;
};

/**
 * Searches and returns task by given id
 * @param {string} id given id
 * @returns {Object} task
 */
const find = async (id: string) => tasks.find((task) => task.id === id);

/**
 * Updates and returns the task with the given id
 * @param {Object} task task to update
 * @returns {Object} task
 */
const update = async (task: Task) => {
  tasks.splice(findIndex(task.id, tasks), 1, task);
  return task;
};

/**
 * Deletes task by given id
 * @param {string} id given id
 */
const remove = async (id: string) => {
  tasks.splice(findIndex(id, tasks), 1);
};

/**
 * delettes tasks with given boardId
 * @param {string} boardId given boardId
 */
const removeWithBoard = async (boardId: string) => {
  const arrayTaskWithBoardId: Task[] = findByBoardId(boardId, tasks);
  for (let i = 0; i < arrayTaskWithBoardId.length; i += 1) {
    const id: string | undefined = arrayTaskWithBoardId[i]?.id;
    tasks.splice(findIndex(id, tasks), 1);
  }
};

/**
 * Searches tasks with given userId
 * @param {string} userId given userId
 * @returns {Array} array of tasks
 */
const findTasks = async (userId: string) => findByUserId(userId, tasks);

export { getAll, save, find, update, remove, removeWithBoard, findTasks };
