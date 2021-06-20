import { createConnection } from 'typeorm';
import { logger } from '../common/Logger.js';
import { dbConfig } from '../common/ormconfig.js';

const connectionToDB = async () => {
  try {
    const connection = await createConnection(dbConfig);
    connection.runMigrations();
    logger('log', `Connected to DB!`);
  } catch (err) {
    const { name, message, stack } = err;
    const errorRecord = `
      errorName:    ${name}
      errorMessage: ${message}
      errorStack:   ${stack}\n`;
    logger('error', errorRecord);
  }
};

const tryToconnectDB = async (func: Function) => {
  await connectionToDB();
  func();
};

export { tryToconnectDB };
