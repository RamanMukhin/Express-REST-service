import { StatusCodes } from 'http-status-codes';
import * as tasksRepo from './task.memory.repository.js';
import * as boardsRepo from '../boards/board.memory.repository.js';
import { NotFoundError } from '../../middlewares/errorHandler.js';
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
const update = async (id, taksUpdateFrom) => {
    await find(id);
    await tasksRepo.update(id, taksUpdateFrom);
};
const remove = async (id) => {
    await find(id);
    await tasksRepo.remove(id);
};
// const removeTasksWithBoard = async (boardId: string): Promise<void> => {
//   await tasksRepo.removeTaskWithBoard(boardId);
// };
// const updateTasksWithUser = async (userId: string): Promise<void> => {
//   await tasksRepo.updateTaskWithUser(userId);
// };
export { getAll, create, find, update, remove,
// removeTasksWithBoard,
// updateTasksWithUser,
 };
