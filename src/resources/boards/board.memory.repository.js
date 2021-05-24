const boardUtil = require('../../common/boardUtil');

const boards = [];

/**
 * Returns an array of boards
 * @returns {Array}
 */
const getAll = async () => boards;

/**
 * Saves the accepted board and returns it
 * @param {Object} board 
 * @returns {Object}
 */
const save = async (board) => {
  boards.push(board);
  return board;
};

/**
 * Searches for a board with an accepted id in array and returns it
 * @param {string} id 
 * @returns {Object}
 */
const find = async (id) => boards.find((board) => board.id === id);

/**
 * Updates the board with the accepted id and returns it
 * @param {Object} board 
 * @returns {Object}
 */
const update = async (board) => {
  boards.splice(boardUtil.findIndex(board.id, boards), 1, board);
  return board;
};

/**
 * Searches for a board with an accepted id in array and deletes it
 * @param {string} id 
 */
const remove = async (id) => {
  boards.splice(boardUtil.findIndex(id, boards), 1);
};

module.exports = { getAll, save, find, update, remove };
