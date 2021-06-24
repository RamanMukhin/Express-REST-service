import express from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import jwt_decode from "jwt-decode";
import { JWT_SECRET_KEY } from '../common/config.js';
import { errorWrapper } from '../common/errorWrapper.js';
import { find } from '../resources/users/user.memory.repository.js';

const router = express.Router({ mergeParams: true });

interface IPayload {
  id: string;
  login: string;
  issued: number;
  expires: number;
}

router.use(
  errorWrapper(
    async (req, res, next) => {
      const unauthorized = (message: string) => res.status(StatusCodes.UNAUTHORIZED).json({
        auth: false,
        status: StatusCodes.UNAUTHORIZED,
        message,
      });
      const sessionToken = req.headers.authorization?.split(' ')[1];
      if (!sessionToken) {
        unauthorized('No token provided');
      } else {
        jwt.verify(sessionToken, String(JWT_SECRET_KEY), async (err) => {
          if (err) {
            unauthorized('Not authorized');
          };
          const payload: IPayload = jwt_decode(sessionToken);
          const { id } = payload;
          const user = await find(id);
          if (!user) {
            unauthorized('YOU are Not authorized');
          } else {
            next();
          };
        });
      };
    }
  )
);

export { router };
