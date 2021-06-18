import { getRepository } from 'typeorm';
import { Board } from './board.model.js';
import { IBoard } from '../../common/boardUtil.js';

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

const update = async (id: string, boardUpdateFrom: IBoard): Promise<void> => {
  const boardRepository = getRepository(Board);
  boardRepository.update(id, boardUpdateFrom);
};

const remove = async (id: string): Promise<void> => {
  const boardRepository = getRepository(Board);
  boardRepository.delete(id);
};

export { getAll, save, find, update, remove };
