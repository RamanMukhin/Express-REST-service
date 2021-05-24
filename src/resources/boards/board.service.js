const boardsRepo = require('./board.memory.repository');
const boardUtil = require('../../common/boardUtil');
const tasksService = require('../tasks/task.service');

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
const create = (title, columns) => {
  const board = boardUtil.toBoard(title, boardUtil.toColumn(columns));
  return boardsRepo.save(board);
};

/**
 * Returns the board by given id
 * @param {string} id given id
 * @returns {Object} the board
 */
const find = (id) => boardsRepo.find(id);

/**
 * Updates the board by given id 
 * @param {string} id given id
 * @param {string} updateTitle title update from
 * @param {Array} updateColumns columns update from
 * @returns {Object} updated board
 */
const update = async (id, updateTitle, updateColumns) => {
  const board = await boardsRepo.find(id);
  const { columns } = board;
  board.title = updateTitle;
  board.columns = boardUtil.toUpdateColumns(columns, updateColumns);
  return boardsRepo.update(board);
};

/**
 * Deletes board and its tasks 
 * @param {string} id id of board to delete
 */
const remove = (id) => {
  boardsRepo.remove(id);
  tasksService.removeWithBoard(id);
};

module.exports = { getAll, create, find, update, remove };
