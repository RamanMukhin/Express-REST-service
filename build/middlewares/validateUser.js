import express from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import jwt_decode from "jwt-decode";
import { sendAuthResult } from '../auth/sendAuthStatus.js';
import { JWT_SECRET_KEY } from '../common/config.js';
import { errorWrapper } from '../common/errorWrapper.js';
import { find } from '../resources/users/user.memory.repository.js';
const router = express.Router({ mergeParams: true });
router.use(errorWrapper(async (req, res, next) => {
    const sessionToken = req.headers.authorization?.split(' ')[1];
    if (!sessionToken) {
        sendAuthResult(res, StatusCodes.UNAUTHORIZED, 'No token provided');
    }
    else {
        jwt.verify(sessionToken, String(JWT_SECRET_KEY), async (err) => {
            if (err) {
                sendAuthResult(res, StatusCodes.UNAUTHORIZED, 'Not authorized');
            }
            ;
            const payload = jwt_decode(sessionToken);
            const { id } = payload;
            const user = await find(id);
            if (!user) {
                sendAuthResult(res, StatusCodes.UNAUTHORIZED, 'You are Not authorized');
            }
            else {
                next();
            }
            ;
        });
    }
    ;
}));
export { router };
