import { StatusCodes } from 'http-status-codes';
import * as tasksRepo from './task.memory.repository.js';
import * as boardsRepo from '../boards/board.memory.repository.js';
import { NotFoundError } from '../../middlewares/errorHandler.js';
import { toTask } from '../../common/taskUtil.js';
const getAll = async () => await tasksRepo.getAll();
const create = async (newTask) => {
    const boardId = (await boardsRepo.find(newTask.boardId));
    const { title, order, description, userId, columnId } = newTask;
    const taskDto = { title, order, description, userId, boardId, columnId };
    return await tasksRepo.save(taskDto);
};
const find = async (id) => {
    const task = await tasksRepo.find(id);
    if (!task)
        throw new NotFoundError(StatusCodes.NOT_FOUND, 'Task not found');
    return task;
};
const update = async (id, taskUpdateFrom) => {
    await find(id);
    const task = toTask(id, taskUpdateFrom);
    return await tasksRepo.update(task);
};
const remove = async (id) => {
    await find(id);
    await tasksRepo.remove(id);
};
export { getAll, create, find, update, remove };
