import { findIndex } from '../../common/userUtil.js';
import { User } from './user.model.js';

const users: User[] = [];

const getAll = async (): Promise<User[]> => users;

const save = async (user: User): Promise<User> => {
  users.push(user);
  return user;
};

const find = async (id: string): Promise<User | undefined> =>
  users.find((user): Boolean => user.id === id);

const update = async (user: User): Promise<User> => {
  users.splice(findIndex(user.id, users), 1, user);
  return user;
};

const remove = async (id: string): Promise<void> => {
  users.splice(findIndex(id, users), 1);
};

export { getAll, save, find, update, remove };
