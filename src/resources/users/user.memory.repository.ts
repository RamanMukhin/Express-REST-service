import { getRepository } from 'typeorm';
import { IUser } from '../../common/userUtil.js';
import { User } from './user.model.js';

const getAll = async (): Promise<User[]> => {
  const userRepository = getRepository(User);
  return await userRepository.find({ where: {} });
};

const save = async (user: IUser): Promise<User> => {
  const userRepository = getRepository(User);
  return await userRepository.save(user);
};

const find = async (id: string): Promise<User | undefined> => {
  const userRepository = getRepository(User);
  return await userRepository.findOne(id);
};

const update = async (id: string, userUpdateFrom: IUser): Promise<void> => {
  const userRepository = getRepository(User);
  await userRepository.update(id, userUpdateFrom);
};

const remove = async (id: string): Promise<void> => {
  const userRepository = getRepository(User);
  await userRepository.delete(id);
};

export { getAll, save, find, update, remove };
