import { Board } from './board.model.js';
import { findIndex } from '../../common/boardUtil.js';

const boards: Board[] = [];

const getAll = async (): Promise<Board[]> => boards;

const save = async (board: Board): Promise<Board> => {
  boards.push(board);
  return board;
};

const find = async (id: string): Promise<Board | undefined> =>
  boards.find((board) => board.id === id);

const update = async (board: Board): Promise<Board> => {
  boards.splice(findIndex(board.id, boards), 1, board);
  return board;
};

const remove = async (id: string): Promise<void> => {
  boards.splice(findIndex(id, boards), 1);
};

export { getAll, save, find, update, remove };
