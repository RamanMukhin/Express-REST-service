const boardsRepo = require('./board.memory.repository');
const boardUtil = require('../../common/boardUtil');
const tasksService = require('../tasks/task.service');

/**
 * Calls a function from the repository and returns an array of found boards
 * @returns {Array} 
 */
const getAll = () => boardsRepo.getAll();

/**
 * Creates a new board, calls the repository function to save this new board, returns it
 * @param {string} title 
 * @param {Array} columns 
 * @returns {Object}
 */
const create = (title, columns) => {
  const board = boardUtil.toBoard(title, boardUtil.toColumn(columns));
  return boardsRepo.save(board);
};

/**
 * Calls a function from the repository, passing the id to it, returns the found board
 * @param {string} id 
 * @returns {Object}
 */
const find = (id) => boardsRepo.find(id);

/**
 * Accepts the id of the object to update and an string with array to update. Returns the updated board
 * @param {string} id 
 * @param {string} updateTitle 
 * @param {Array} updateColumns 
 * @returns {Object}
 */
const update = async (id, updateTitle, updateColumns) => {
  const board = await boardsRepo.find(id);
  const { columns } = board;
  board.title = updateTitle;
  board.columns = boardUtil.toUpdateColumns(columns, updateColumns);
  return boardsRepo.update(board);
};

/**
 * Calls a function from the repository to delete a board by id and a function from the task service to delete tasks
 * @param {string} id 
 */
const remove = (id) => {
  boardsRepo.remove(id);
  tasksService.removeWithBoard(id);
};

module.exports = { getAll, create, find, update, remove };
