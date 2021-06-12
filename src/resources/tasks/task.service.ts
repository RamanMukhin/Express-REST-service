import * as tasksRepo from './task.memory.repository.js';
import { toTask, toUpdateTask, ITask } from '../../common/taskUtil.js';
import { Task } from '../tasks/task.model.js';

const getAll = async (): Promise<Task[]> => await tasksRepo.getAll();

const create = async (newTask: ITask): Promise<Task> => {
  const task = toTask(newTask);
  return await tasksRepo.save(task);
};

const find = async (id: string): Promise<Task> => {
  const task = await tasksRepo.find(id);
  if (!task) throw new Error('Task not found');
  return task;
};

const update = async (id: string, taskUpdateFrom: ITask): Promise<Task> => {
  const task = await find(id);
  toUpdateTask(task, taskUpdateFrom);
  return await tasksRepo.update(task);
};

const remove = async (id: string): Promise<void> => {
  await find(id);
  await tasksRepo.remove(id);
};

const removeTasksWithBoard = async (boardId: string): Promise<void> => {
  await tasksRepo.removeTaskWithBoard(boardId);
};

const updateTasksWithUser = async (userId: string): Promise<void> => {
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
  removeTasksWithBoard,
  updateTasksWithUser,
};
