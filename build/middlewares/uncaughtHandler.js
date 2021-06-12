import fs from 'fs';
function uncaughtExceptionHandler(err) {
    const { name, message, stack } = err;
    const date = new Date();
    const errorRecord = `
  uncaughtException:
  time:            ${date}
  errorName:       ${name}
  errorMessage:    ${message}
  errorStack:      ${stack}\n`;
    fs.writeFileSync('./logs/uncaughtExceptionLogs.txt', errorRecord);
    console.error(errorRecord);
    process.exit(1);
}
let recordNumber = 1;
function unhandledRejectionHandler(reason, promise) {
    const date = new Date();
    const errorRecord = `
  Recording №             ${recordNumber}
  Unhandled Rejection at: ${JSON.stringify(promise)}
  time:                   ${date}
  reason:                 ${reason}\n`;
    fs.appendFileSync('./logs/unhandledRejectionLogs.txt', errorRecord);
    console.warn(errorRecord);
    recordNumber += 1;
}
export { uncaughtExceptionHandler, unhandledRejectionHandler };
