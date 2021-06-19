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

async function toColumn(
  columnsCreateFrom: ColumnClass[]
): Promise<ColumnClass[]> {
  const columnRepository = getRepository(ColumnClass);
  const createdColumns = [];
  for (let i = 0; i < columnsCreateFrom.length; i += 1) {
    const columnDto = columnsCreateFrom[i]!;
    const newColumn = await columnRepository.save(columnDto);
    createdColumns.push(newColumn);
  }
  return createdColumns;
}

async function toUpdateColumns(
  columnsUpdateFrom: ColumnClass[]
): Promise<void> {
  const columnRepository = getRepository(ColumnClass);
  await columnRepository.save(columnsUpdateFrom);
}

// async function toUpdateBoard(
//   boardToUpdate: Board,
//   titleUpdateFrom: string
// ): Promise<IBoard> {
//   const { id } = boardToUpdate;

//   return boardUpdateFrom;
// }

function findIndex(id: string, boards: Board[]): number {
  return boards.findIndex((board) => board.id === id);
}

export {
  toBoardDto,
  toColumnDto,
  toBoard,
  toColumn,
  // toUpdateBoard,
  toUpdateColumns,
  findIndex,
  IBoard,
};
