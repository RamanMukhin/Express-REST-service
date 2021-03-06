import express from 'express';
import { StatusCodes } from 'http-status-codes';
import * as usersService from './user.service.js';
import { toUserDto } from '../../common/userUtil.js';
import { User } from './user.model.js';
import { errorWrapper } from '../../common/errorWrapper.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(
  errorWrapper(
    async (_req, res): Promise<void> => {
      const users = await usersService.getAll();
      res.json(users.map(User.toResponse));
    }
  )
);

router.route('/').post(
  errorWrapper(
    async (req, res): Promise<void> => {
      const userCreateFrom = toUserDto(req.body);
      const user = await usersService.create(userCreateFrom);
      res.status(StatusCodes.CREATED).json(User.toResponse(user));
    }
  )
);

router.route('/:id').get(
  errorWrapper(
    async (req, res): Promise<void> => {
      const { id } = req.params;
      const user = await usersService.find(String(id));
      res.json(User.toResponse(user));
    }
  )
);

router.route('/:id').put(
  errorWrapper(
    async (req, res): Promise<void> => {
      const { id } = req.params;
      const userUpdateFrom = toUserDto(req.body);
      const user = await usersService.update(String(id), userUpdateFrom);
      res.json(User.toResponse(user));
    }
  )
);

router.route('/:id').delete(
  errorWrapper(
    async (req, res): Promise<void> => {
      const { id } = req.params;
      await usersService.remove(String(id));
      res.json('User deleted');
    }
  )
);

export { router };
