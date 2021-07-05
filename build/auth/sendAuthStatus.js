import { StatusCodes, getReasonPhrase } from 'http-status-codes';
const sendAuthResult = (res, statusCode, message, token) => res.status(statusCode).json({
    auth: statusCode === StatusCodes.OK,
    status: getReasonPhrase(statusCode),
    message,
    token,
});
export { sendAuthResult };
