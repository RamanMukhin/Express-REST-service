import express from 'express';
import { StatusCodes } from 'http-status-codes';
import * as usersService from './user.service.js';
import { toUserDto } from '../../common/userUtil.js';
import { User } from './user.model.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(
  async (_req, res): Promise<void> => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  }
);

router.route('/').post(
  async (req, res): Promise<void> => {
    const newUser = toUserDto(req.body);
    const user = await usersService.create(newUser);
    res.status(StatusCodes.CREATED).json(User.toResponse(user));
  }
);

router.route('/:id').get(
  async (req, res, next): Promise<void> => {
    const { id } = req.params;
    try {
      const user = await usersService.find(id);
      res.json(User.toResponse(user));
    } catch (err) {
      next(err);
    }
  }
);

router.route('/:id').put(
  async (req, res, next): Promise<void> => {
    const { id } = req.params;
    const userUpdateFrom = toUserDto(req.body);
    try {
      const user = await usersService.update(id, userUpdateFrom);
      res.json(User.toResponse(user));
    } catch (err) {
      next(err);
    }
  }
);

router.route('/:id').delete(
  async (req, res, next): Promise<void> => {
    const { id } = req.params;
    try {
      await usersService.remove(id);
      res.json('User deleted');
    } catch (err) {
      next(err);
    }
  }
);

export { router };
