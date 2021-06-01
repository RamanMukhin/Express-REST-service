import { Board } from '../resources/boards/board.model.js';
import { Column } from '../resources/boards/column.model.js';

interface IBoard {
  id?: string;
  title: string;
  columns: Column[];
}

/**
 * Creates and returns boardDto from the given req body
 * @param {Object} req given request body
 * @returns {string} boardDto from the given req body
 */
function toBoardDto(req: IBoard) {
  return req.title;
}

/**
 * Creates and returns columnDto from given request body
 * @param {Object} req given request body
 * @returns {Array} columnDto
 */
function toColumnDto(req: IBoard) {
  return req.columns;
}

/**
 * Creates and returns a new object of class Board
 * @param {string} title boardDto
 * @param {Array} columns columns
 * @returns {Object} new object of class Board
 */
function toBoard(title: string, columns: Column[]) {
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
function toColumn(columns: Column[]) {
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
function toUpdateColumns(columns: Column[], updateColumns: Column[]) {
  for (let i = 0; i < updateColumns.length; i += 1) {
    const columnToUpdate: Column = columns[i]!;
    const columnUpdateFrom: Column = updateColumns[i]!;
    Object.assign(columnToUpdate, columnUpdateFrom);
  }
  return columns;
}

/**
 * Updates given Board object
 * @param {Object} board given object
 * @param {string} updateTitle title update from
 * @param {Array} updateColumns columns update from
 */
function updateBoard(
  board: Board,
  updateTitle: string,
  updateColumns: Column[]
) {
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
function findIndex(id: string, boards: Board[]) {
  return boards.findIndex((board) => board.id === id);
}

export {
  toBoardDto,
  toColumnDto,
  toBoard,
  toColumn,
  updateBoard,
  toUpdateColumns,
  findIndex,
  IBoard,
};
