const router = require('express').Router();
const boardsService = require('./board.service');
const boardUtil = require('../../common/boardUtil');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  const title = boardUtil.toBoardDto(req);
  const columns = boardUtil.toColumnDto(req);
  const board = await boardsService.create(title, columns);
  res.statusCode = 201;
  res.json(board);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.find(id);
  if (typeof board === 'undefined') {
    res.statusCode = 404;
  }
  res.json(board);
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const updateTitle = boardUtil.toBoardDto(req);
  const updateColumns = boardUtil.toColumnDto(req);
  const board = await boardsService.update(id, updateTitle, updateColumns);
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  await boardsService.remove(id);
  res.json();
});

module.exports = router;
