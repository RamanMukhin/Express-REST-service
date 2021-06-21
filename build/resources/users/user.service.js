import { StatusCodes } from 'http-status-codes';
import * as usersRepo from './user.memory.repository.js';
import { NotFoundError } from '../../middlewares/errorHandler.js';
const getAll = async () => await usersRepo.getAll();
const create = async (newUser) => await usersRepo.save(newUser);
const find = async (id) => {
    const user = await usersRepo.find(id);
    if (!user)
        throw new NotFoundError(StatusCodes.NOT_FOUND, 'User not found');
    return user;
};
const update = async (id, userUpdateFrom) => {
    await find(id);
    return await usersRepo.update(id, userUpdateFrom);
};
const remove = async (id) => {
    await find(id);
    await usersRepo.remove(id);
};
export { getAll, create, find, update, remove };
