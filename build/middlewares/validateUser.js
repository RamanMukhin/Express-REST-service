import express from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../common/config.js';
import { errorWrapper } from '../common/errorWrapper.js';
const router = express.Router({ mergeParams: true });
router.use(errorWrapper(async (req, res, next) => {
    const sessionToken = req.headers.authorization?.split(' ')[1];
    if (!sessionToken) {
        res.status(StatusCodes.UNAUTHORIZED).json({ auth: false, message: "No token provided." });
    }
    else {
        jwt.verify(sessionToken, String(JWT_SECRET_KEY), (err) => {
            if (err) {
                res.status(StatusCodes.UNAUTHORIZED).json({ auth: false, message: "Not authorized." });
            }
            next();
        });
    }
    ;
}));
export { router };
