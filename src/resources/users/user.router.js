const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const userUtil = require('../../common/userUtil');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const newUser = userUtil.toUserDto(req);
  const user = await usersService.create(newUser);
  res.statusCode = 201;
  res.json(User.toResponse(user));
});

router.route('/:id').get(async (req, res) => {
  const {id} = req.params;
  const user = await usersService.find(id);
  res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const {id} = req.params;
  const updateUser = userUtil.toUserDto(req);
  const user = await usersService.update(id, updateUser);
  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const {id} = req.params;
  await usersService.remove(id);
  res.json();
});

module.exports = router;
