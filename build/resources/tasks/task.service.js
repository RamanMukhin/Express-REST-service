import * as tasksRepo from './task.memory.repository.js';
import { toTask, toUpdateTask } from '../../common/taskUtil.js';
const getAll = async () => await tasksRepo.getAll();
const create = async (newTask) => {
    const task = toTask(newTask);
    return await tasksRepo.save(task);
};
const find = async (id) => await tasksRepo.find(id);
const update = async (id, updateTask) => {
    const task = (await tasksRepo.find(id));
    toUpdateTask(task, updateTask);
    return await tasksRepo.update(task);
};
const remove = async (id) => {
    await tasksRepo.remove(id);
};
const removeWithBoard = async (boardId) => {
    await tasksRepo.removeWithBoard(boardId);
};
const updateWithUser = async (userId) => {
    const arrOfTasks = await tasksRepo.findTasks(userId);
    for (let i = 0; i < arrOfTasks.length; i += 1) {
        const task = arrOfTasks[i];
        task.userId = null;
        await tasksRepo.update(task);
    }
};
export { getAll, create, find, update, remove, removeWithBoard, updateWithUser, };
