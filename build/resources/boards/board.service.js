import * as boardsRepo from './board.memory.repository.js';
import { toBoard, toColumn, toUpdateColumns } from '../../common/boardUtil.js';
import { removeWithBoard } from '../tasks/task.service.js';
/**
 * Returns all boards
 * @returns {Array} array of boards
 */
const getAll = async () => await boardsRepo.getAll();
/**
 * Creates and returns a new board
 * @param {string} title the board title
 * @param {Array} columns the board columns
 * @returns {Object} new board
 */
const create = async (title, columns) => {
    const board = toBoard(title, toColumn(columns));
    return await boardsRepo.save(board);
};
/**
 * Returns the board by given id
 * @param {string} id given id
 * @returns {Object} the board
 */
const find = async (id) => await boardsRepo.find(id);
/**
 * Updates the board by given id
 * @param {string} id given id
 * @param {string} updateTitle title update from
 * @param {Array} updateColumns columns update from
 * @returns {Object} updated board
 */
const update = async (id, updateTitle, updateColumns) => {
    const board = (await boardsRepo.find(id));
    const columnsToUpdate = board.columns;
    board.title = updateTitle;
    board.columns = toUpdateColumns(columnsToUpdate, updateColumns);
    return await boardsRepo.update(board);
};
/**
 * Deletes board and its tasks
 * @param {string} id id of board to delete
 */
const remove = async (id) => {
    await boardsRepo.remove(id);
    await removeWithBoard(id);
};
export { getAll, create, find, update, remove };
