import { ColumnClass } from '../resources/boards/column.model.js';

interface IBoard {
  id?: string;
  title: string;
  columns: ColumnClass[];
}

function toBoardDto(requestBody: IBoard): string {
  return requestBody.title;
}

function toColumnDto(requestBody: IBoard): ColumnClass[] {
  return requestBody.columns;
}

function toBoard(title: string, columns: ColumnClass[]): IBoard {
  const boardCreateFrom: IBoard = { title, columns };
  return boardCreateFrom;
}

export { toBoardDto, toColumnDto, toBoard, IBoard };
