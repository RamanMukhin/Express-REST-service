import { Board } from './board.model.js';
import { findIndex } from '../../common/boardUtil.js';

const boards: Board[] = [];

const getAll = async () => boards;

const save = async (board: Board) => {
  boards.push(board);
  return board;
};

const find = async (id: string) => boards.find((board) => board.id === id);

const update = async (board: Board) => {
  boards.splice(findIndex(board.id, boards), 1, board);
  return board;
};

const remove = async (id: string) => {
  boards.splice(findIndex(id, boards), 1);
};

export { getAll, save, find, update, remove };
