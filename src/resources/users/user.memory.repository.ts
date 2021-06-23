import { getRepository, DeleteResult } from 'typeorm';
import { User, IUser, ILoginUser } from './user.model.js';

const getAll = async (): Promise<User[]> => await getRepository(User).find();

const save = async (user: IUser): Promise<User> => await getRepository(User).save(user);

const find = async (id: string): Promise<User | undefined> => await getRepository(User).findOne(id);

const findUser = async (user: ILoginUser): Promise<User | undefined> => await getRepository(User).findOne({where: { login: user.login }});

const update = async (user: User): Promise<User> => await getRepository(User).save(user);

const remove = async (id: string): Promise<DeleteResult> => await getRepository(User).delete(id);

export { getAll, save, find, update, remove, findUser };
