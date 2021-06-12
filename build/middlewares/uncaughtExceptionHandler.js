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
export { uncaughtExceptionHandler };
