const Board = require('../resources/boards/board.model');
const Column = require('../resources/boards/column.model');

/**
 * Creates a string from the request  to create a new board and returns it
 * @param {Object} req
 * @returns {string}
 */
function toBoardDto(req) {
  return req.body.title;
}

/**
 * Creates an Array from the request  to create a new columns and returns it
 * @param {Object} req
 * @returns {Array}
 */
function toColumnDto(req) {
  return req.body.columns;
}

/**
 * Creates a new object of class Board and returns it
 * @param {string} title
 * @param {Object} columns
 * @returns {Object}
 */
function toBoard(title, columns) {
  return new Board({
    title,
    columns,
  });
}

/**
 * Сreates an array of new objects of the Column class
 * @param {Array} columns
 * @returns {Array}
 */
function toColumn(columns) {
  const createdColumns = [];
  for (let i = 0; i < columns.length; i += 1) {
    createdColumns.push(new Column(columns[i]));
  }
  return createdColumns;
}

/**
 * Accepts an array of columns and an array of columns with updated properties. Updates and returns the first array
 * @param {Array} columns
 * @param {Array} updateColumns
 * @returns {Array}
 */
function toUpdateColumns(columns, updateColumns) {
  for (let i = 0; i < updateColumns.length; i += 1) {
    columns[i].title = updateColumns[i].title;
    columns[i].order = updateColumns[i].order;
  }
  return columns;
}

/**
 * Updates the received Board object
 * @param {Object} board
 * @param {string} updateTitle
 * @param {Array} updateColumns
 */
function updateBoard(board, updateTitle, updateColumns) {
  const { columns } = board;
  board.title = updateTitle;
  board.columns = toUpdateColumns(columns, updateColumns);
}

/**
 * Returns the index of the object in the received array by the received id
 * @param {string} id
 * @param {Array} boards
 * @returns {number}
 */
function findIndex(id, boards) {
  return boards.findIndex((board) => board.id === id);
}

module.exports = {
  toBoardDto,
  toColumnDto,
  toBoard,
  toColumn,
  updateBoard,
  toUpdateColumns,
  findIndex,
};
