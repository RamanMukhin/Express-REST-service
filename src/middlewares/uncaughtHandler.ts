import fs from 'fs';
import { logger } from '../common/Logger.js';

function uncaughtExceptionHandler(err: Error): void {
  const { name, message, stack } = err;
  const date = new Date();

  const errorRecord = `
  uncaughtException:
  time:            ${date}
  errorName:       ${name}
  errorMessage:    ${message}
  errorStack:      ${stack}\n`;

  fs.appendFileSync('./logs/uncaughtExceptionLogs.txt', errorRecord);
  logger('uncaughtException', errorRecord);
}

function unhandledRejectionHandler(
  reason: {} | null | undefined,
  promise: Promise<any>
): void {
  const date = new Date();

  const errorRecord = `
  Unhandled Rejection at: ${JSON.stringify(promise)}
  time:                   ${date}
  reason:                 ${reason}\n`;

  fs.appendFileSync('./logs/unhandledRejectionLogs.txt', errorRecord);
  logger('unhandledRejection', errorRecord);
}

export { uncaughtExceptionHandler, unhandledRejectionHandler };
