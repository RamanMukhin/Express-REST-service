import express from 'express';
import { StatusCodes } from 'http-status-codes';
import * as boardsService from './board.service.js';
import { toBoardDto, toColumnDto } from '../../common/boardUtil.js';
import { errorWrapper } from '../../common/errorWrapper.js';
const router = express.Router({ mergeParams: true });
router.route('/').get(errorWrapper(async (_req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards);
}));
router.route('/').post(errorWrapper(async (req, res) => {
    const titleCreateFrom = toBoardDto(req.body);
    const columnsCreateFrom = toColumnDto(req.body);
    const board = await boardsService.create(titleCreateFrom, columnsCreateFrom);
    res.status(StatusCodes.CREATED).json(board);
}));
router.route('/:id').get(errorWrapper(async (req, res) => {
    const { id } = req.params;
    const board = await boardsService.find(String(id));
    res.json(board);
}));
router.route('/:id').put(errorWrapper(async (req, res) => {
    const { id } = req.params;
    const titleUpdateFrom = toBoardDto(req.body);
    const columnsUpdateFrom = toColumnDto(req.body);
    await boardsService.update(String(id), titleUpdateFrom, columnsUpdateFrom);
    const board = await boardsService.find(String(id));
    res.json(board);
}));
router.route('/:id').delete(errorWrapper(async (req, res) => {
    const { id } = req.params;
    await boardsService.remove(String(id));
    res.json('Board deleted');
}));
export { router };
