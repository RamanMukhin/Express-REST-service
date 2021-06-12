import { Board } from '../resources/boards/board.model.js';
import { Column } from '../resources/boards/column.model.js';

interface IBoard {
  id?: string;
  title: string;
  columns: Column[];
}

function toBoardDto(requestBody: IBoard): string {
  return requestBody.title;
}

function toColumnDto(requestBody: IBoard): Column[] {
  return requestBody.columns;
}

function toBoard(title: string, columns: Column[]): Board {
  return new Board({
    title,
    columns,
  });
}

function toColumn(columns: Column[]): Column[] {
  const createdColumns = [];
  for (let i = 0; i < columns.length; i += 1) {
    createdColumns.push(new Column(columns[i]));
  }
  return createdColumns;
}

function toUpdateColumns(
  columnsToUpdate: Column[],
  columnsUpdateFrom: Column[]
): Column[] {
  for (let i = 0; i < columnsUpdateFrom.length; i += 1) {
    const columnToUpdate: Column = columnsToUpdate[i]!;
    const columnUpdateFrom: Column = columnsUpdateFrom[i]!;
    Object.assign(columnToUpdate, columnUpdateFrom);
  }
  return columnsToUpdate;
}

function toUpdateBoard(
  board: Board,
  titleUpdateFrom: string,
  columnsUpdateFrom: Column[]
): void {
  const columnsToUpdate: Column[] = board.columns;
  board.title = titleUpdateFrom;
  board.columns = toUpdateColumns(columnsToUpdate, columnsUpdateFrom);
}

function findIndex(id: string, boards: Board[]): number {
  return boards.findIndex((board) => board.id === id);
}

export {
  toBoardDto,
  toColumnDto,
  toBoard,
  toColumn,
  toUpdateBoard,
  toUpdateColumns,
  findIndex,
  IBoard,
};
