import { getRepository } from 'typeorm';
import { Board } from './board.model.js';
import { ColumnClass } from './column.model.js';
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
async function saveColumns(columnsCreateFrom) {
    const columnRepository = getRepository(ColumnClass);
    return await Promise.all(columnsCreateFrom.map((column) => columnRepository.save(column)));
}
async function updateColumns(columnsUpdateFrom) {
    const columnRepository = getRepository(ColumnClass);
    await columnRepository.save(columnsUpdateFrom);
}
export { getAll, save, find, update, remove, saveColumns, updateColumns };
