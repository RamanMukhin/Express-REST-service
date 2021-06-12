import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { toTaskDto } from '../../common/taskUtil.js';
import * as tasksService from './task.service.js';

const router = express.Router({ mergeParams: true });

router.route('/:id/tasks/').get(
  async (_req, res): Promise<void> => {
    const tasks = await tasksService.getAll();
    res.json(tasks);
  }
);

router.route('/:id/tasks/').post(
  async (req, res): Promise<void> => {
    const newTask = toTaskDto(req.body);
    newTask.boardId = req.params.id;
    const task = await tasksService.create(newTask);
    res.status(StatusCodes.CREATED).json(task);
  }
);

router.route('/:id/tasks/:id').get(
  async (req, res, next): Promise<void> => {
    const { id } = req.params;
    try {
      const task = await tasksService.find(id);
      res.json(task);
    } catch (err) {
      next(err);
    }
  }
);

router.route('/:id/tasks/:id').put(
  async (req, res, next): Promise<void> => {
    const { id } = req.params;
    const taskUpdateFrom = toTaskDto(req.body);
    try {
      const task = await tasksService.update(id, taskUpdateFrom);
      res.json(task);
    } catch (err) {
      next(err);
    }
  }
);

router.route('/:id/tasks/:id').delete(
  async (req, res, next): Promise<void> => {
    const { id } = req.params;
    try {
      await tasksService.remove(id);
      res.json('Task deleted');
    } catch (err) {
      next(err);
    }
  }
);

export { router };
