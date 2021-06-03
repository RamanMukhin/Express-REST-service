import express from 'express';
import * as tasksService from './task.service.js';

const router = express.Router({ mergeParams: true });

router.route('/:id/tasks/').get(async (_req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/:id/tasks/').post(async (req, res) => {
  const newTask = req.body;
  newTask.boardId = req.params.id;
  const task = await tasksService.create(newTask);
  res.status(201).json(task);
});

router.route('/:id/tasks/:id').get(async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await tasksService.find(id);
    res.json(task);
  } catch (err) {
    next(err);
  }
});

router.route('/:id/tasks/:id').put(async (req, res, next) => {
  const { id } = req.params;
  const updateTask = req.body;
  try {
    const task = await tasksService.update(id, updateTask);
    res.json(task);
  } catch (err) {
    next(err);
  }
});

router.route('/:id/tasks/:id').delete(async (req, res, next) => {
  const { id } = req.params;
  try {
    await tasksService.remove(id);
    res.json('Task deleted');
  } catch (err) {
    next(err);
  }
});

export { router };
