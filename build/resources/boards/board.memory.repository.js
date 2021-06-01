import { findIndex } from '../../common/boardUtil.js';
const boards = [];
const getAll = async () => boards;
const save = async (board) => {
    boards.push(board);
    return board;
};
const find = async (id) => boards.find((board) => board.id === id);
const update = async (board) => {
    boards.splice(findIndex(board.id, boards), 1, board);
    return board;
};
const remove = async (id) => {
    boards.splice(findIndex(id, boards), 1);
};
export { getAll, save, find, update, remove };
