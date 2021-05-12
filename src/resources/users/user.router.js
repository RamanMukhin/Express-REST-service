const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.postUser(req);
  res.statusCode = 201;
  res.json(User.toResponse(user));
});

router.route('/:id').get(async (req, res) => {
  const {id} = req.params;
  const user = await usersService.getById(id);
  res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const {id} = req.params;
  const user = await usersService.putUser(id, req);
  res.json(User.toResponse(user));
});

module.exports = router;
