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
const update = async (id, title) => {
    const boardRepository = getRepository(Board);
    return boardRepository.save({ id, title });
};
const remove = async (id) => {
    const boardRepository = getRepository(Board);
    await boardRepository.delete(id);
};
export { getAll, save, find, update, remove };
