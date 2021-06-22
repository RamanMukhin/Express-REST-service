import { getRepository, DeleteResult } from 'typeorm';
import { Task, ITask } from './task.model.js';

const getAll = async (): Promise<Task[]> => await getRepository(Task).find();

const save = async (newTask: ITask): Promise<Task> => await getRepository(Task).save(newTask);

const find = async (id: string): Promise<Task | undefined> => await getRepository(Task).findOne(id);

const update = async (task: Task): Promise<Task> => await getRepository(Task).save(task);

const remove = async (id: string): Promise<DeleteResult> => await getRepository(Task).delete(id);

export { getAll, save, find, update, remove };
