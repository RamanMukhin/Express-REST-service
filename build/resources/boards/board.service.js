import { StatusCodes } from 'http-status-codes';
import * as boardsRepo from './board.memory.repository.js';
import { toBoard, toColumn, toUpdateColumns } from '../../common/boardUtil.js';
import { removeTasksWithBoard } from '../tasks/task.service.js';
import { NotFoundError } from '../../middlewares/errorHandler.js';
const getAll = async () => await boardsRepo.getAll();
const create = async (titleCreateFrom, columnsCreateFrom) => {
    const createdColumns = await toColumn(columnsCreateFrom);
    const board = await toBoard(titleCreateFrom, createdColumns);
    return await boardsRepo.save(board);
};
const find = async (id) => {
    const board = await boardsRepo.find(id);
    if (!board)
        throw new NotFoundError(StatusCodes.NOT_FOUND, 'Board not found');
    return board;
};
const update = async (id, titleUpdateFrom, columnsUpdateFrom) => {
    await find(id);
    await toUpdateColumns(columnsUpdateFrom);
    return await boardsRepo.update(id, titleUpdateFrom);
};
const remove = async (id) => {
    await find(id);
    await boardsRepo.remove(id);
    await removeTasksWithBoard(id);
};
export { getAll, create, find, update, remove };
