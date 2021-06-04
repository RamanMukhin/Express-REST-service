import fs from 'fs';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
const writeErrorStream = fs.createWriteStream('./logs/errorLogs.txt', {
    encoding: 'utf-8',
});
let errorRecordNumber = 1;
function errorHandler(err, _req, res, next) {
    const { name, message, stack } = err;
    const statusCode = name === 'Error'
        ? StatusCodes.NOT_FOUND
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
    console.error(errorRecord);
    errorRecordNumber += 1;
    next();
}
export { errorHandler };
