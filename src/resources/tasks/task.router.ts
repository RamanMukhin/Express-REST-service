import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { errorWrapper } from '../../common/errorWrapper.js';
import { toTaskDto } from '../../common/taskUtil.js';
import { Task } from './task.model.js';
import * as tasksService from './task.service.js';

const router = express.Router({ mergeParams: true });

router.route('/:id/tasks/').get(
  errorWrapper(
    async (_req, res): Promise<void> => {
      const tasks = await tasksService.getAll();
      res.json(tasks.map(Task.toResponse));
    }
  )
);

router.route('/:id/tasks/').post(
  errorWrapper(
    async (req, res): Promise<void> => {
      const taskCreateFrom = toTaskDto(req.body);
      const { id } = req.params;
      taskCreateFrom.boardId = String(id);
      const task = await tasksService.create(taskCreateFrom);
      res.status(StatusCodes.CREATED).json(Task.toResponse(task));
    }
  )
);

router.route('/:id/tasks/:id').get(
  errorWrapper(
    async (req, res): Promise<void> => {
      const { id } = req.params;
      const task = await tasksService.find(String(id));
      res.json(Task.toResponse(task));
    }
  )
);

router.route('/:id/tasks/:id').put(
  errorWrapper(
    async (req, res): Promise<void> => {
      const { id } = req.params;
      const taskUpdateFrom = toTaskDto(req.body);
      const task = await tasksService.update(String(id), taskUpdateFrom);
      res.json(Task.toResponse(task));
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
