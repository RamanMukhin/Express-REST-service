import { getRepository } from 'typeorm';
import { Task } from './task.model.js';
const getAll = async () => await getRepository(Task).find();
const save = async (newTask) => await getRepository(Task).save(newTask);
const find = async (id) => await getRepository(Task).findOne(id);
const update = async (task) => await getRepository(Task).save(task);
const remove = async (id) => await getRepository(Task).delete(id);
export { getAll, save, find, update, remove };
