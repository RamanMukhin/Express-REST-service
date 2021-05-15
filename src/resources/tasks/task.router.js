const router = require('express').Router();
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/').post(async (req, res) => {
  const newTask = req.body;
  newTask.boardId = req.baseUrl.slice(8, -6);
  const task = await tasksService.create(newTask);
  res.statusCode = 201;
  res.json(task);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.find(id);
  if (typeof task === 'undefined') {
    res.statusCode = 404;
  }
  res.json(task);
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const updateTask = req.body;
  const task = await tasksService.update(id, updateTask);
  res.json(task);
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  await tasksService.remove(id);
  res.json();
});

module.exports = router;
