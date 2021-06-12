import * as boardsRepo from './board.memory.repository.js';
import { toBoard, toColumn, toUpdateBoard } from '../../common/boardUtil.js';
import { removeTasksWithBoard } from '../tasks/task.service.js';
const getAll = async () => await boardsRepo.getAll();
const create = async (title, columns) => {
    const board = toBoard(title, toColumn(columns));
    return await boardsRepo.save(board);
};
const find = async (id) => {
    const board = await boardsRepo.find(id);
    if (!board)
        throw new Error('Board not found');
    return board;
};
const update = async (id, titleUpdateFrom, columnsUpdateFrom) => {
    const board = await find(id);
    toUpdateBoard(board, titleUpdateFrom, columnsUpdateFrom);
    return await boardsRepo.update(board);
};
const remove = async (id) => {
    await find(id);
    await boardsRepo.remove(id);
    await removeTasksWithBoard(id);
};
export { getAll, create, find, update, remove };
