import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { errorWrapper } from '../../common/errorWrapper.js';
import { toTaskDto } from '../../common/taskUtil.js';
import * as tasksService from './task.service.js';

const router = express.Router({ mergeParams: true });

router.route('/:id/tasks/').get(
  errorWrapper(
    async (_req, res): Promise<void> => {
      const tasks = await tasksService.getAll();
      res.json(tasks);
    }
  )
);

router.route('/:id/tasks/').post(
  errorWrapper(
    async (req, res): Promise<void> => {
      const newTask = toTaskDto(req.body);
      const { id } = req.params;
      newTask.boardId = String(id);
      const task = await tasksService.create(newTask);
      res.status(StatusCodes.CREATED).json(task);
    }
  )
);

router.route('/:id/tasks/:id').get(
  errorWrapper(
    async (req, res): Promise<void> => {
      const { id } = req.params;
      const task = await tasksService.find(String(id));
      res.json(task);
    }
  )
);

router.route('/:id/tasks/:id').put(
  errorWrapper(
    async (req, res): Promise<void> => {
      const { id } = req.params;
      const taskUpdateFrom = toTaskDto(req.body);
      const task = await tasksService.update(String(id), taskUpdateFrom);
      res.json(task);
    }
  )
);

router.route('/:id/tasks/:id').delete(
  errorWrapper(
    async (req, res): Promise<void> => {
      const { id } = req.params;
      await tasksService.remove(String(id));
      res.json('Task deleted');
    }
  )
);

export { router };
