import { getRepository } from 'typeorm';
import { Board } from './board.model.js';

const getAll = async (): Promise<Board[]> => {
  const boardRepository = getRepository(Board);
  return boardRepository.find({ where: {} });
};

const save = async (board: Board): Promise<Board> => {
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

export { getAll, save, find, update, remove };
