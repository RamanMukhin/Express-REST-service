const boardsRepo = require('./board.memory.repository');
const boardUtil = require('../../common/boardUtil');

const getAll = () => boardsRepo.getAll();

const create = (title, columns) => {
  const board = boardUtil.toBoard(title, boardUtil.toColumn(columns));
  return boardsRepo.save(board);
};

const find = (id) => boardsRepo.find(id);

const update = async (id, updateTitle, updateColumns) => {
  const board = await boardsRepo.find(id);
  const { columns } = board;
  board.title = updateTitle;
  board.columns = boardUtil.toUpdateColumns(columns, updateColumns);
  return boardsRepo.update(board);
};

const remove = (id) => boardsRepo.remove(id);

module.exports = { getAll, create, find, update, remove };
