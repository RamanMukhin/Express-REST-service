import { getRepository } from 'typeorm';
import { Board } from '../resources/boards/board.model.js';
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

async function toBoard(title: string, columns: ColumnClass[]): Promise<Board> {
  const boardCreateFrom = { title, columns };
  const boardRepository = getRepository(Board);
  return boardRepository.create(boardCreateFrom);
}

async function toColumn(columns: ColumnClass[]): Promise<ColumnClass[]> {
  const columnRepository = getRepository(ColumnClass);
  const createdColumns = [];
  for (let i = 0; i < columns.length; i += 1) {
    const columnDto = columns[i]!;
    const newColumn = columnRepository.create(columnDto);
    createdColumns.push(newColumn);
  }
  return createdColumns;
}

async function toUpdateColumns(
  columnsToUpdate: ColumnClass[],
  columnsUpdateFrom: ColumnClass[]
): Promise<ColumnClass[]> {
  const columnRepository = getRepository(ColumnClass);
  const updatedColumns: ColumnClass[] = [];
  for (let i = 0; i < columnsToUpdate.length; i += 1) {
    const columnToUpdate = columnsToUpdate[i]!;
    const columnUpdateFrom = columnsUpdateFrom[i]!;
    const { id } = columnToUpdate;
    columnRepository.update(id, columnUpdateFrom);
    const updatedColumn = (await columnRepository.findOne(id))!;
    updatedColumns.push(updatedColumn);
  }
  return updatedColumns;
}

async function toUpdateBoard(
  boardToUpdate: Board,
  titleUpdateFrom: string,
  columnsUpdateFrom: ColumnClass[]
): Promise<IBoard> {
  const columnsToUpdate = boardToUpdate.columns;
  const updatedColumns = await toUpdateColumns(
    columnsToUpdate,
    columnsUpdateFrom
  );
  const boardUpdateFrom: IBoard = {
    title: titleUpdateFrom,
    columns: updatedColumns,
  };
  return boardUpdateFrom;
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
