export function logger(typeOfLog: string, messageToLog: string): void {
  if (typeOfLog === 'error') {
    console.error(messageToLog);
  } else if (
    typeOfLog === 'uncaughtException' ||
    typeOfLog === 'unhandledRejection'
  ) {
    console.error(messageToLog);
    process.exit(1);
  } else {
    console.log(messageToLog);
  }
};
