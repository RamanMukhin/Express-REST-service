import * as usersRepo from './user.memory.repository.js';
import { toUser, toUpdateUser } from '../../common/userUtil.js';
import { updateWithUser } from '../tasks/task.service.js';
const getAll = async () => await usersRepo.getAll();
const create = async (newUser) => {
    const user = toUser(newUser);
    return await usersRepo.save(user);
};
const find = async (id) => await usersRepo.find(id);
const update = async (id, updateUser) => {
    const user = (await usersRepo.find(id));
    toUpdateUser(user, updateUser);
    return await usersRepo.update(user);
};
const remove = async (id) => {
    await usersRepo.remove(id);
    await updateWithUser(id);
};
export { getAll, create, find, update, remove };
