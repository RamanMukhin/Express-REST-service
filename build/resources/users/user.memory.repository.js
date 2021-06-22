import { getRepository } from 'typeorm';
import { User } from './user.model.js';
const getAll = async () => await getRepository(User).find({ where: {} });
const save = async (user) => await getRepository(User).save(user);
const find = async (id) => await getRepository(User).findOne(id);
const update = async (user) => await getRepository(User).save(user);
const remove = async (id) => await getRepository(User).delete(id);
export { getAll, save, find, update, remove };
