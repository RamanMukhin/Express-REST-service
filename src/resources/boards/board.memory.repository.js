const boardUtil = require('../../common/boardUtil');

const boards = [];

const getAll = async () => boards;

const save = async (board) => {
  boards.push(board);
  return board;
};

const find = async (id) => boards.find((board) => board.id === id);

const update = async (board) => {
  boards.splice(boardUtil.findIndex(board.id, boards), 1, board);
  return board;
};

const remove = async (id) => {
  boards.splice(boardUtil.findIndex(id, boards), 1);
};

module.exports = { getAll, save, find, update, remove };
