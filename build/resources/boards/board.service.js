import { StatusCodes } from 'http-status-codes';
import * as boardsRepo from './board.memory.repository.js';
import { toBoard, toUdateBoard } from '../../common/boardUtil.js';
import { NotFoundError } from '../../middlewares/errorHandler.js';
const getAll = async () => await boardsRepo.getAll();
const create = async (titleCreateFrom, columnsCreateFrom) => {
    const createdColumns = await boardsRepo.saveColumns(columnsCreateFrom);
    const boardCreateFrom = toBoard(titleCreateFrom, createdColumns);
    return await boardsRepo.save(boardCreateFrom);
};
const find = async (id) => {
    const board = await boardsRepo.find(id);
    if (!board)
        throw new NotFoundError(StatusCodes.NOT_FOUND, 'Board not found');
    return board;
};
const update = async (id, titleUpdateFrom, columnsUpdateFrom) => {
    await find(id);
    await boardsRepo.updateColumns(columnsUpdateFrom);
    const board = toUdateBoard(id, titleUpdateFrom);
    return await boardsRepo.update(board);
};
const remove = async (id) => {
    await find(id);
    await boardsRepo.remove(id);
};
export { getAll, create, find, update, remove };
