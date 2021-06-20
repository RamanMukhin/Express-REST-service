import { getRepository } from 'typeorm';
import { User } from './user.model.js';
const getAll = async () => {
    const userRepository = getRepository(User);
    return await userRepository.find({ where: {} });
};
const save = async (user) => {
    const userRepository = getRepository(User);
    return await userRepository.save(user);
};
const find = async (id) => {
    const userRepository = getRepository(User);
    return await userRepository.findOne(id);
};
const update = async (id, userUpdateFrom) => {
    const userRepository = getRepository(User);
    await userRepository.update(id, userUpdateFrom);
};
const remove = async (id) => {
    const userRepository = getRepository(User);
    await userRepository.delete(id);
};
export { getAll, save, find, update, remove };
