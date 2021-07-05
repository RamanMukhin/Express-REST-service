import { StatusCodes } from 'http-status-codes';
import * as boardsRepo from './board.memory.repository.js';
import { toBoard, toUdateBoard } from '../../common/boardUtil.js';
import { ColumnClass, IColumnClass } from './column.model.js';
import { Board, IBoard } from './board.model';
import { NotFoundError } from '../../middlewares/errorHandler.js';

const getAll = async (): Promise<Board[]> => await boardsRepo.getAll();

const create = async (
  titleCreateFrom: string,
  columnsCreateFrom: IColumnClass[]
): Promise<Board> => {
  const createdColumns = await boardsRepo.saveColumns(columnsCreateFrom);
  const boardCreateFrom: IBoard = toBoard(titleCreateFrom, createdColumns);
  return await boardsRepo.save(boardCreateFrom);
};

const find = async (id: string): Promise<Board> => {
  const board = await boardsRepo.find(id);
  if (!board) throw new NotFoundError(StatusCodes.NOT_FOUND, 'Board not found');
  return board;
};

const update = async (
  id: string,
  titleUpdateFrom: string,
  columnsUpdateFrom: ColumnClass[]
): Promise<Board> => {
  await find(id);
  await boardsRepo.updateColumns(columnsUpdateFrom);
  const board = toUdateBoard(id, titleUpdateFrom);
  return await boardsRepo.update(board);
};

const remove = async (id: string): Promise<void> => {
  await find(id);
  await boardsRepo.remove(id);
};

export { getAll, create, find, update, remove };
