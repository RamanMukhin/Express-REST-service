import express from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY, EXPIRATION_TIME } from '../common/config.js';
import { errorWrapper } from '../common/errorWrapper.js';
import { findUser } from './auth.service.js';
import { IPayload } from './payload.model.js';
import { sendAuthResult } from './sendAuthStatus.js';

const router = express.Router({ mergeParams: true });

router.route('/').post(
  errorWrapper(
    async (req, res): Promise<void> => {
      const { login, password } = req.body;
      const user = await findUser({ login, password });
      if (!user) {
        sendAuthResult(res, StatusCodes.FORBIDDEN, 'Not authorized');
      } else {
        const id = user.id!;
        const payloadData: IPayload =  { id, login };
        const token = jwt.sign(payloadData, String(JWT_SECRET_KEY), { expiresIn: +EXPIRATION_TIME! });
        sendAuthResult(res, StatusCodes.OK, 'Successfully authorized', token);
      }
    }
  )
);

export { router };
