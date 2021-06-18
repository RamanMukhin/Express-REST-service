import { getRepository } from 'typeorm';
import { User } from './user.model.js';
const getAll = async () => {
    const userRepository = getRepository(User);
    return userRepository.find({ where: {} });
};
const save = async (user) => {
    const userRepository = getRepository(User);
    return userRepository.save(user);
};
const find = async (id) => {
    const userRepository = getRepository(User);
    return userRepository.findOne(id);
};
const update = async (id, userUpdateFrom) => {
    const userRepository = getRepository(User);
    userRepository.update(id, userUpdateFrom);
};
const remove = async (id) => {
    const userRepository = getRepository(User);
    await userRepository.delete(id);
};
export { getAll, save, find, update, remove };
