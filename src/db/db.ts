import { createConnection, Connection } from 'typeorm';
import { logger } from '../common/Logger.js';
import { dbConfig } from '../common/ormconfig.js';
import { POSTGRES_TRY } from '../common/config.js';
import { create, findUser } from '../resources/users/user.service.js';

const connectionToDB = async () => {
  let connection: Connection;
  const numberOftryConnection = +POSTGRES_TRY!;

  try {
    connection = await createConnection(dbConfig);

    for (let i = 0; i < numberOftryConnection; i += 1) {
      if (connection.isConnected) {
        await connection.runMigrations();
        logger('log', `Connected to DB!`);

        const admin = await findUser({ login: 'admin', password: 'admin' });

        if (!admin) {
          await create({
            name: 'admin',
            login: 'admin',
            password: 'admin',
          });
        }

        break;
      };

      await connection.connect();
    }
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
