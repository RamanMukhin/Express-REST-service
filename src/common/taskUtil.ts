import { Task } from '../resources/tasks/task.model.js';

interface ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string;
  columnId: string;
}

/**
 * Creates and returns a new object of class Task
 * @param {Object} newTask taskDto
 * @returns {Object} new task
 */
function toTask(newTask: ITask) {
  return new Task({
    title: newTask.title,
    order: newTask.order,
    description: newTask.description,
    userId: newTask.userId!,
    boardId: newTask.boardId,
    columnId: newTask.columnId,
  });
}

/**
 * Updates given task object
 * @param {Object} task given task
 * @param {Object} updateTask task from update
 */
function toUpdateTask(task: Task, updateTask: ITask) {
  Object.assign(task, updateTask);
}

/**
 * Searches and returns the index of the object with given id
 * @param {string} id given id
 * @param {Array} tasks array for searching in
 * @returns {Number} the index of the object with given id
 */
function findIndex(id: string | undefined, tasks: Task[]) {
  return tasks.findIndex((task: Task) => task.id === id);
}

/**
 * Returns an array of tasks assigned to boardId
 * @param {string} boardId assigned boardId
 * @param {Array} tasks array of tasks
 * @returns {Array} array of task assigned to boardId
 */
function findByBoardId(boardId: string, tasks: Task[]) {
  return tasks.filter((task) => task.boardId === boardId);
}

/**
 * Returns an array of tasks assigned to userId
 * @param {string} userId assigned boardId
 * @param {Array} tasks array of tasks
 * @returns {Array} array of task assigned to userId
 */
function findByUserId(userId: string, tasks: Task[]) {
  return tasks.filter((task: Task) => task.userId === userId);
}

export { toTask, toUpdateTask, findIndex, findByBoardId, findByUserId, ITask };
