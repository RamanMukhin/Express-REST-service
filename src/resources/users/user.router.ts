import express from 'express';
import * as usersService from './user.service';
import { toUserDto } from '../../common/userUtil';
import { User } from './user.model';

const router = express.Router();

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const newUser = toUserDto(req.body);
  const user = await usersService.create(newUser);
  res.status(201).json(User.toResponse(user));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.find(id);
  if (typeof user === 'undefined') {
    res.status(404);
  } else {
    res.json(User.toResponse(user));
  }
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const updateUser = toUserDto(req.body);
  const user = await usersService.update(id, updateUser);
  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  await usersService.remove(id);
  res.json();
});

export { router };
