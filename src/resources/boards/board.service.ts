import { StatusCodes } from 'http-status-codes';
import * as boardsRepo from './board.memory.repository.js';
import { toBoard, toColumn, toUpdateBoard } from '../../common/boardUtil.js';
import { removeTasksWithBoard } from '../tasks/task.service.js';
import { ColumnClass } from './column.model.js';
import { Board } from './board.model';
import { NotFoundError } from '../../middlewares/errorHandler.js';

const getAll = async (): Promise<Board[]> => await boardsRepo.getAll();

const create = async (
  title: string,
  columns: ColumnClass[]
): Promise<Board> => {
  const columnsCreateFrom = await toColumn(columns);
  const board = await toBoard(title, columnsCreateFrom);
  return await boardsRepo.save(board);
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
): Promise<void> => {
  const boardToUpdate = await find(id);
  const boardUpdateFrom = await toUpdateBoard(
    boardToUpdate,
    titleUpdateFrom,
    columnsUpdateFrom
  );
  return await boardsRepo.update(id, boardUpdateFrom);
};

const remove = async (id: string): Promise<void> => {
  await find(id);
  await boardsRepo.remove(id);
  await removeTasksWithBoard(id);
};

export { getAll, create, find, update, remove };
