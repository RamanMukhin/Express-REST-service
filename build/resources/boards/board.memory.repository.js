import { getRepository } from 'typeorm';
import { Board } from './board.model.js';
const getAll = async () => {
    const boardRepository = getRepository(Board);
    return boardRepository.find({ where: {} });
};
const save = async (board) => {
    const boardRepository = getRepository(Board);
    return boardRepository.save(board);
};
const find = async (id) => {
    const boardRepository = getRepository(Board);
    return boardRepository.findOne(id);
};
const update = async (id, boardUpdateFrom) => {
    const boardRepository = getRepository(Board);
    boardRepository.update(id, boardUpdateFrom);
};
const remove = async (id) => {
    const boardRepository = getRepository(Board);
    boardRepository.delete(id);
};
export { getAll, save, find, update, remove };
