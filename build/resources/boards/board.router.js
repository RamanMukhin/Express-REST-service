import express from 'express';
import * as boardsService from './board.service.js';
import { toBoardDto, toColumnDto } from '../../common/boardUtil.js';
const router = express.Router({ mergeParams: true });
router.route('/').get(async (_req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards);
});
router.route('/').post(async (req, res) => {
    const title = toBoardDto(req.body);
    const columns = toColumnDto(req.body);
    const board = await boardsService.create(title, columns);
    res.status(201).json(board);
});
router.route('/:id').get(async (req, res, next) => {
    const { id } = req.params;
    try {
        const board = await boardsService.find(id);
        res.json(board);
    }
    catch (err) {
        next(err);
    }
});
router.route('/:id').put(async (req, res, next) => {
    const { id } = req.params;
    const updateTitle = toBoardDto(req.body);
    const updateColumns = toColumnDto(req.body);
    try {
        const board = await boardsService.update(id, updateTitle, updateColumns);
        res.json(board);
    }
    catch (err) {
        next(err);
    }
});
router.route('/:id').delete(async (req, res, next) => {
    const { id } = req.params;
    try {
        await boardsService.remove(id);
        res.json('Board deleted');
    }
    catch (err) {
        next(err);
    }
});
export { router };
