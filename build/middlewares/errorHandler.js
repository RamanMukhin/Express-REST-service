import fs from 'fs';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { logger } from '../common/Logger.js';
class NotFoundError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
const writeErrorStream = fs.createWriteStream('./logs/errorLogs.txt', {
    encoding: 'utf-8',
});
let errorRecordNumber = 1;
function errorHandler(err, _req, res, next) {
    const { name, message, stack } = err;
    const statusCode = err instanceof NotFoundError
        ? err.statusCode
        : StatusCodes.INTERNAL_SERVER_ERROR;
    const messageReason = getReasonPhrase(statusCode);
    res.status(statusCode).json({ statusCode, messageReason });
    const errorRecord = `
  faultRecording № ${errorRecordNumber}
  status code:     ${statusCode}
  errorName:       ${name}
  errorMessage:    ${message}
  errorStack:      ${stack}\n`;
    writeErrorStream.write(errorRecord);
    logger('error', errorRecord);
    errorRecordNumber += 1;
    next();
}
export { errorHandler, NotFoundError };
