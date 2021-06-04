import * as boardsRepo from './board.memory.repository.js';
import { toBoard, toColumn, toUpdateBoard } from '../../common/boardUtil.js';
import { removeTasksWithBoard } from '../tasks/task.service.js';
import { Column } from './column.model.js';
import { Board } from './board.model';

const getAll = async (): Promise<Board[]> => await boardsRepo.getAll();

const create = async (title: string, columns: Column[]): Promise<Board> => {
  const board = toBoard(title, toColumn(columns));
  return await boardsRepo.save(board);
};

const find = async (id: string): Promise<Board> => {
  const board = await boardsRepo.find(id);
  if (!board) throw new Error('Board not found');
  return board;
};

const update = async (
  id: string,
  titleUpdateFrom: string,
  columnsUpdateFrom: Column[]
): Promise<Board> => {
  const board = await find(id);
  toUpdateBoard(board, titleUpdateFrom, columnsUpdateFrom);
  return await boardsRepo.update(board);
};

const remove = async (id: string): Promise<void> => {
  await find(id);
  await boardsRepo.remove(id);
  await removeTasksWithBoard(id);
};

export { getAll, create, find, update, remove };