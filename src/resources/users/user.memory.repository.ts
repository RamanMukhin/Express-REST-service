import { findIndex } from '../../common/userUtil.js';
import { User } from './user.model.js';

const users: User[] = [];

const getAll = async () => users;

const save = async (user: User) => {
  users.push(user);
  return user;
};

const find = async (id: string) => users.find((user) => user.id === id);

const update = async (user: User) => {
  users.splice(findIndex(user.id, users), 1, user);
  return user;
};

const remove = async (id: string) => {
  users.splice(findIndex(id, users), 1);
};

export { getAll, save, find, update, remove };
