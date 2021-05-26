import { Board } from './board.model.js';
import { findIndex } from '../../common/boardUtil.js';

const boards: Board[] = [];

/**
 * Returns the array of boards
 * @returns {Array} the array of boards
 */
const getAll = async () => boards;

/**
 * Saves and returns given board
 * @param {Object} board given board
 * @returns {Object} board
 */
const save = async (board: Board) => {
  boards.push(board);
  return board;
};

/**
 * Searches and returns board by given id
 * @param {string} id given id
 * @returns {Object} board
 */
const find = async (id: string) => boards.find((board) => board.id === id);

/**
 * Updates and returns the board with the given id
 * @param {Object} board board to update
 * @returns {Object} board
 */
const update = async (board: Board) => {
  boards.splice(findIndex(board.id, boards), 1, board);
  return board;
};

/**
 * Deletes user by given id
 * @param {string} id given id
 */
const remove = async (id: string) => {
  boards.splice(findIndex(id, boards), 1);
};

export { getAll, save, find, update, remove };
