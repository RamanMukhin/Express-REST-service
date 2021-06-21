import { getRepository } from 'typeorm';
import { IBoard } from '../../common/boardUtil.js';
import { Board } from './board.model.js';
import { ColumnClass } from './column.model.js';

const getAll = async (): Promise<Board[]> => {
  const boardRepository = getRepository(Board);
  return boardRepository.find({ where: {} });
};

const save = async (board: IBoard): Promise<Board> => {
  const boardRepository = getRepository(Board);
  return boardRepository.save(board);
};

const find = async (id: string): Promise<Board | undefined> => {
  const boardRepository = getRepository(Board);
  return boardRepository.findOne(id);
};

const update = async (id: string, title: string): Promise<Board> => {
  const boardRepository = getRepository(Board);
  return boardRepository.save({ id, title });
};

const remove = async (id: string): Promise<void> => {
  const boardRepository = getRepository(Board);
  await boardRepository.delete(id);
};

async function saveColumns(
  columnsCreateFrom: ColumnClass[]
): Promise<ColumnClass[]> {
  const columnRepository = getRepository(ColumnClass);
  return await Promise.all(
    columnsCreateFrom.map((column) => columnRepository.save(column))
  );
}

async function updateColumns(columnsUpdateFrom: ColumnClass[]): Promise<void> {
  const columnRepository = getRepository(ColumnClass);
  await columnRepository.save(columnsUpdateFrom);
}

export { getAll, save, find, update, remove, saveColumns, updateColumns };
