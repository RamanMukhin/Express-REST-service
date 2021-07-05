import express from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY, EXPIRATION_TIME } from '../common/config.js';
import { errorWrapper } from '../common/errorWrapper.js';
import { findUser } from '../resources/users/user.service.js';
const router = express.Router({ mergeParams: true });
router.route('/').post(errorWrapper(async (req, res) => {
    const { login, password } = req.body;
    const user = await findUser({ login, password });
    if (!user) {
        res.status(StatusCodes.FORBIDDEN).send(getReasonPhrase(StatusCodes.FORBIDDEN));
    }
    else {
        const { id } = user;
        const token = jwt.sign({ id, login }, String(JWT_SECRET_KEY), { expiresIn: +EXPIRATION_TIME });
        res.status(StatusCodes.OK).json({
            authorization: getReasonPhrase(StatusCodes.OK),
            token,
        });
    }
}));
export { router };
