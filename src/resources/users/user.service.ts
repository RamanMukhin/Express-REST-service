import { StatusCodes } from 'http-status-codes';
import * as usersRepo from './user.memory.repository.js';
import { User, IUser } from './user.model.js';
import { NotFoundError } from '../../middlewares/errorHandler.js';
import { toUpdateUser } from '../../common/userUtil.js';

const getAll = async (): Promise<User[]> => await usersRepo.getAll();

const create = async (userCreateFrom: IUser): Promise<User> => await usersRepo.save(userCreateFrom);

const find = async (id: string): Promise<User> => {
  const user = await usersRepo.find(id);
  if (!user) throw new NotFoundError(StatusCodes.NOT_FOUND, 'User not found');
  return user;
};

const update = async (id: string, userUpdateFrom: IUser): Promise<User> => {
  await find(id);
  const user = toUpdateUser(id, userUpdateFrom);
  return await usersRepo.update(user);
};

const remove = async (id: string): Promise<void> => {
  await find(id);
  await usersRepo.remove(id);
};

export { getAll, create, find, update, remove };
