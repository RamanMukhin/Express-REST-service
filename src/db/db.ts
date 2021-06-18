// import { createConnection, Connection, getConnection } from 'typeorm';
import { createConnection } from 'typeorm';
import { logger } from '../common/Logger.js';
import { dbConfig } from '../common/ormconfig.js';

const connectionToDB = async () => {
  try {
    // const connection: Connection | undefined = getConnection();
    // if (connection) {
    //   if (!connection.isConnected) await connection.connect();
    // } else {
    //   createConnection(dbConfig);
    // }
    await createConnection(dbConfig);
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
