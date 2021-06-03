import * as boardsRepo from './board.memory.repository.js';
import { toBoard, toColumn, toUpdateColumns } from '../../common/boardUtil.js';
import { removeWithBoard } from '../tasks/task.service.js';
import { Column } from './column.model.js';

const getAll = async () => await boardsRepo.getAll();

const create = async (title: string, columns: Column[]) => {
  const board = toBoard(title, toColumn(columns));
  return await boardsRepo.save(board);
};

const find = async (id: string) => {
  const board = await boardsRepo.find(id);
  if (!board) throw new Error('Board not found');
  return board;
};

const update = async (
  id: string,
  updateTitle: string,
  updateColumns: Column[]
) => {
  const board = await find(id);
  const columnsToUpdate: Column[] = board.columns;
  board.title = updateTitle;
  board.columns = toUpdateColumns(columnsToUpdate, updateColumns);
  return await boardsRepo.update(board);
};

const remove = async (id: string) => {
  await find(id);
  await boardsRepo.remove(id);
  await removeWithBoard(id);
};

export { getAll, create, find, update, remove };
