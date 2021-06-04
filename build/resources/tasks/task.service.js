import * as tasksRepo from './task.memory.repository.js';
import { toTask, toUpdateTask } from '../../common/taskUtil.js';
const getAll = async () => await tasksRepo.getAll();
const create = async (newTask) => {
    const task = toTask(newTask);
    return await tasksRepo.save(task);
};
const find = async (id) => {
    const task = await tasksRepo.find(id);
    if (!task)
        throw new Error('Task not found');
    return task;
};
const update = async (id, taskUpdateFrom) => {
    const task = await find(id);
    toUpdateTask(task, taskUpdateFrom);
    return await tasksRepo.update(task);
};
const remove = async (id) => {
    await find(id);
    await tasksRepo.remove(id);
};
const removeTasksWithBoard = async (boardId) => {
    await tasksRepo.removeTaskWithBoard(boardId);
};
const updateTasksWithUser = async (userId) => {
    const arrOfTasks = await tasksRepo.findTasks(userId);
    for (let i = 0; i < arrOfTasks.length; i += 1) {
        const task = arrOfTasks[i];
        task.userId = null;
        await tasksRepo.update(task);
    }
};
export { getAll, create, find, update, remove, removeTasksWithBoard, updateTasksWithUser, };