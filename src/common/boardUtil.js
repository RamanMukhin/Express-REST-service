const Board = require('../resources/boards/board.model');
const Column = require('../resources/boards/column.model');

/**
 * Creates and returns boardDto from the given req
 * @param {Object} req given request
 * @returns {string} boardDto from the given req
 */
function toBoardDto(req) {
  return req.body.title;
}

/**
 * Creates and returns columnDto from given request
 * @param {Object} req given request
 * @returns {Array} columnDto
 */
function toColumnDto(req) {
  return req.body.columns;
}

/**
 * Creates and returns a new object of class Board 
 * @param {string} title boardDto
 * @param {Object} columns columns
 * @returns {Object} new object of class Board
 */
function toBoard(title, columns) {
  return new Board({
    title,
    columns,
  });
}

/**
 * Сreates an array of new objects of the Column class
 * @param {Array} columns columnDto
 * @returns {Array} columns
 */
function toColumn(columns) {
  const createdColumns = [];
  for (let i = 0; i < columns.length; i += 1) {
    createdColumns.push(new Column(columns[i]));
  }
  return createdColumns;
}

/** 
 * Updates and returns array of columns 
 * @param {Array} columns array to update
 * @param {Array} updateColumns array update from
 * @returns {Array} updated array of columns
 */
function toUpdateColumns(columns, updateColumns) {
  for (let i = 0; i < updateColumns.length; i += 1) {
    columns[i].title = updateColumns[i].title;
    columns[i].order = updateColumns[i].order;
  }
  return columns;
}

/**
 * Updates given Board object
 * @param {Object} board given object
 * @param {string} updateTitle title update from
 * @param {Array} updateColumns columns update from
 */
function updateBoard(board, updateTitle, updateColumns) {
  const { columns } = board;
  board.title = updateTitle;
  board.columns = toUpdateColumns(columns, updateColumns);
}

/**
 * Searches and returns the index of the object with given id
 * @param {string} id given id
 * @param {Array} boards array for searching in
 * @returns {number} the index of the object with given id
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
