import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

const writeErrorStream = fs.createWriteStream('./logs/errorLogs.txt', {
  encoding: 'utf-8',
});
let errorRecordNumber = 1;

function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, message, stack } = err;
  const statusCode = name === 'Error' ? 404 : 500;
  res.status(statusCode).json({ statusCode, message });

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
