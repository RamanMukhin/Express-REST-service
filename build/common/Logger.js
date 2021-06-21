export function logger(typeOfLog, messageToLog) {
    if (typeOfLog === 'error') {
        console.error(messageToLog);
    }
    else if (typeOfLog === 'uncaughtException' ||
        typeOfLog === 'unhandledRejection') {
        console.error(messageToLog);
        process.exit(1);
    }
    else {
        console.log(messageToLog);
    }
}
