import { StatusCodes } from 'http-status-codes';
import * as tasksRepo from './task.memory.repository.js';
import * as boardsRepo from '../boards/board.memory.repository.js';
import { Task, ITask } from '../tasks/task.model.js';
import { NotFoundError } from '../../middlewares/errorHandler.js';
import { toTask, toUpdateTask } from '../../common/taskUtil.js';

const getAll = async (): Promise<Task[]> => await tasksRepo.getAll();

const create = async (taskDto: ITask): Promise<Task> => {
  const boardId = await boardsRepo.find(String(taskDto.boardId));
  const taskCreateFrom = toTask(boardId!, taskDto);
  return await tasksRepo.save(taskCreateFrom);
};

const find = async (id: string): Promise<Task> => {
  const task = await tasksRepo.find(id);
  if (!task) throw new NotFoundError(StatusCodes.NOT_FOUND, 'Task not found');
  return task;
};

const update = async (id: string, taskUpdateFrom: ITask): Promise<Task> => {
  await find(id);
  const task = toUpdateTask(id, taskUpdateFrom);
  return await tasksRepo.update(task);
};

const remove = async (id: string): Promise<void> => {
  await find(id);
  await tasksRepo.remove(id);
};

export { getAll, create, find, update, remove };
