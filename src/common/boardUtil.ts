import { Board } from '../resources/boards/board.model.js';
import { Column } from '../resources/boards/column.model.js';

interface IBoard {
  id?: string;
  title: string;
  columns: Column[];
}

function toBoardDto(req: IBoard) {
  return req.title;
}

function toColumnDto(req: IBoard) {
  return req.columns;
}

function toBoard(title: string, columns: Column[]) {
  return new Board({
    title,
    columns,
  });
}

function toColumn(columns: Column[]) {
  const createdColumns = [];
  for (let i = 0; i < columns.length; i += 1) {
    createdColumns.push(new Column(columns[i]));
  }
  return createdColumns;
}

function toUpdateColumns(columns: Column[], updateColumns: Column[]) {
  for (let i = 0; i < updateColumns.length; i += 1) {
    const columnToUpdate: Column = columns[i]!;
    const columnUpdateFrom: Column = updateColumns[i]!;
    Object.assign(columnToUpdate, columnUpdateFrom);
  }
  return columns;
}

function updateBoard(
  board: Board,
  updateTitle: string,
  updateColumns: Column[]
) {
  const { columns } = board;
  board.title = updateTitle;
  board.columns = toUpdateColumns(columns, updateColumns);
}

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
