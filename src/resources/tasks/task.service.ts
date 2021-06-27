import { StatusCodes } from 'http-status-codes';
import * as tasksRepo from './task.memory.repository.js';
import * as boardsRepo from '../boards/board.memory.repository.js';
import { ITask } from '../../common/taskUtil.js';
import { Task } from '../tasks/task.model.js';
import { NotFoundError } from '../../middlewares/errorHandler.js';

const getAll = async (): Promise<Task[]> => await tasksRepo.getAll();

const create = async (newTask: ITask): Promise<Task> => {
  const boardId = (await boardsRepo.find(newTask.boardId))!;
  const { title, order, description, userId, columnId } = newTask;
  const taskDto = { title, order, description, userId, boardId, columnId };
  return await tasksRepo.save(taskDto);
};

const find = async (id: string): Promise<Task> => {
  const task = await tasksRepo.find(id);
  if (!task) throw new NotFoundError(StatusCodes.NOT_FOUND, 'Task not found');
  return task;
};

const update = async (id: string, taksUpdateFrom: ITask): Promise<void> => {
  await find(id);
  await tasksRepo.update(id, taksUpdateFrom);
};

const remove = async (id: string): Promise<void> => {
  await find(id);
  await tasksRepo.remove(id);
};

export { getAll, create, find, update, remove };
