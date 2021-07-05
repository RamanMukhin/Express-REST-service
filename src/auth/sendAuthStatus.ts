import { Response, } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

const sendAuthResult = (res: Response, statusCode: number, message: string, token?: string) =>
  res.status(statusCode).json({
    auth: statusCode === StatusCodes.OK,
    status: getReasonPhrase(statusCode),
    message,
    token,
  });

export { sendAuthResult };

