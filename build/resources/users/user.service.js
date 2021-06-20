import { StatusCodes } from 'http-status-codes';
import * as usersRepo from './user.memory.repository.js';
import { toUser, toUpdateUser } from '../../common/userUtil.js';
import { updateTasksWithUser } from '../tasks/task.service.js';
import { NotFoundError } from '../../middlewares/errorHandler.js';
const getAll = async () => await usersRepo.getAll();
const create = async (newUser) => {
    const user = toUser(newUser);
    return await usersRepo.save(user);
};
const find = async (id) => {
    const user = await usersRepo.find(id);
    if (!user)
        throw new NotFoundError(StatusCodes.NOT_FOUND, 'User not found');
    return user;
};
const update = async (id, userUpdateFrom) => {
    const user = await find(id);
    toUpdateUser(user, userUpdateFrom);
    return await usersRepo.update(user);
};
const remove = async (id) => {
    await find(id);
    await usersRepo.remove(id);
    await updateTasksWithUser(id);
};
export { getAll, create, find, update, remove };
