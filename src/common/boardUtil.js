const Board = require('../resources/boards/board.model');
const Column = require('../resources/boards/column.model');

function toBoardDto(req) {
  return req.body.title;
}

function toColumnDto(req) {
  return req.body.columns;
}

function toBoard(title, columns) {
  return new Board({
    title,
    columns,
  });
}

function toColumn(columns) {
  const createdColumns = [];
  for (let i = 0; i < columns.length; i += 1) {
    createdColumns.push(new Column(columns[i]));
  }
  return createdColumns;
}

function toUpdateColumns(columns, updateColumns) {
  for (let i = 0; i < updateColumns.length; i += 1) {
    columns[i].title = updateColumns[i].title;
    columns[i].order = updateColumns[i].order;
  }
  return columns;
}

function updateBoard(board, updateTitle, updateColumns) {
  const { columns } = board;
  board.title = updateTitle;
  board.columns = toUpdateColumns(columns, updateColumns);
}

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
