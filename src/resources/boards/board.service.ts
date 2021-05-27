import * as boardsRepo from './board.memory.repository';
import { toBoard, toColumn, toUpdateColumns } from '../../common/boardUtil';
import { removeWithBoard } from '../tasks/task.service';
import { Column } from './column.model';

/**
 * Returns all boards
 * @returns {Array} array of boards
 */
const getAll = () => boardsRepo.getAll();

/**
 * Creates and returns a new board
 * @param {string} title the board title
 * @param {Array} columns the board columns
 * @returns {Object} new board
 */
const create = (title: string, columns: Column[]) => {
  const board = toBoard(title, toColumn(columns));
  return boardsRepo.save(board);
};

/**
 * Returns the board by given id
 * @param {string} id given id
 * @returns {Object} the board
 */
const find = (id: string) => boardsRepo.find(id);

/**
 * Updates the board by given id
 * @param {string} id given id
 * @param {string} updateTitle title update from
 * @param {Array} updateColumns columns update from
 * @returns {Object} updated board
 */
const update = async (
  id: string,
  updateTitle: string,
  updateColumns: Column[]
) => {
  const board = (await boardsRepo.find(id))!;
  const columnsToUpdate: Column[] = board.columns;
  board.title = updateTitle;
  board.columns = toUpdateColumns(columnsToUpdate, updateColumns);
  return boardsRepo.update(board);
};

/**
 * Deletes board and its tasks
 * @param {string} id id of board to delete
 */
const remove = (id: string) => {
  boardsRepo.remove(id);
  removeWithBoard(id);
};

export { getAll, create, find, update, remove };
