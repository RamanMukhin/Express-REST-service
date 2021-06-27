import { getRepository } from 'typeorm';
import { Task } from './task.model.js';
import { ITask } from '../../common/taskUtil.js';

const getAll = async (): Promise<Task[]> => {
  const taskRepository = getRepository(Task);
  return await taskRepository.find({ where: {} });
};

const save = async (newTask: Task): Promise<Task> => {
  const taskRepository = getRepository(Task);
  return await taskRepository.save(newTask);
};

const find = async (id: string): Promise<Task | undefined> => {
  const taskRepository = getRepository(Task);
  return await taskRepository.findOne(id);
};

const update = async (id: string, taksUpdateFrom: ITask): Promise<void> => {
  const taskRepository = getRepository(Task);
  await taskRepository.update(id, taksUpdateFrom);
};

const remove = async (id: string): Promise<void> => {
  const taskRepository = getRepository(Task);
  await taskRepository.delete(id);
};

export { getAll, save, find, update, remove };
