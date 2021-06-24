import { StatusCodes } from 'http-status-codes';
import * as usersRepo from './user.memory.repository.js';
import { User, IUser, ILoginUser } from './user.model.js';
import { NotFoundError } from '../../middlewares/errorHandler.js';
import { toUser, toUpdateUser, checkUser } from '../../common/userUtil.js';

const getAll = async (): Promise<User[]> => await usersRepo.getAll();

const create = async (userDto: IUser): Promise<User> => {
  const userCreateFrom = await toUser(userDto);
  return await usersRepo.save(userCreateFrom);
};

const find = async (id: string): Promise<User> => {
  const user = await usersRepo.find(id);
  if (!user) throw new NotFoundError(StatusCodes.NOT_FOUND, 'User not found');
  return user;
};

const findUser = async (userLogin: ILoginUser): Promise<User | undefined> => {
  const user = await usersRepo.findUser(userLogin);
  if (user) {
    const isPassword = await checkUser(userLogin, user);
    if (isPassword) return user;
  }
  return undefined;
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

export { getAll, create, find, update, remove, findUser };
