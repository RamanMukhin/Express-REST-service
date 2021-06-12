import express from 'express';
import { StatusCodes } from 'http-status-codes';
import * as boardsService from './board.service.js';
import { toBoardDto, toColumnDto } from '../../common/boardUtil.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(
  async (_req, res): Promise<void> => {
    const boards = await boardsService.getAll();
    res.json(boards);
  }
);

router.route('/').post(
  async (req, res): Promise<void> => {
    const title = toBoardDto(req.body);
    const columns = toColumnDto(req.body);
    const board = await boardsService.create(title, columns);
    res.status(StatusCodes.CREATED).json(board);
  }
);

router.route('/:id').get(
  async (req, res, next): Promise<void> => {
    const { id } = req.params;
    try {
      const board = await boardsService.find(id);
      res.json(board);
    } catch (err) {
      next(err);
    }
  }
);

router.route('/:id').put(
  async (req, res, next): Promise<void> => {
    const { id } = req.params;
    const titleUpdateFrom = toBoardDto(req.body);
    const columnsUpdateFrom = toColumnDto(req.body);
    try {
      const board = await boardsService.update(
        id,
        titleUpdateFrom,
        columnsUpdateFrom
      );
      res.json(board);
    } catch (err) {
      next(err);
    }
  }
);

router.route('/:id').delete(
  async (req, res, next): Promise<void> => {
    const { id } = req.params;
    try {
      await boardsService.remove(id);
      res.json('Board deleted');
    } catch (err) {
      next(err);
    }
  }
);

export { router };
