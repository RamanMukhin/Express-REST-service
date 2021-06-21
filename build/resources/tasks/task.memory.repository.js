import { getRepository } from 'typeorm';
import { Task } from './task.model.js';
const getAll = async () => {
    const taskRepository = getRepository(Task);
    return await taskRepository.find({ where: {} });
};
const save = async (newTask) => {
    const taskRepository = getRepository(Task);
    return await taskRepository.save(newTask);
};
const find = async (id) => {
    const taskRepository = getRepository(Task);
    return await taskRepository.findOne(id);
};
const update = async (id, taksUpdateFrom) => {
    const taskRepository = getRepository(Task);
    await taskRepository.update(id, taksUpdateFrom);
};
const remove = async (id) => {
    const taskRepository = getRepository(Task);
    await taskRepository.delete(id);
};
export { getAll, save, find, update, remove };
