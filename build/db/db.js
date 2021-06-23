import { createConnection } from 'typeorm';
import { logger } from '../common/Logger.js';
import { dbConfig } from '../common/ormconfig.js';
import { POSTGRES_TRY } from '../common/config.js';
import { findAdmin, save } from '../resources/users/user.memory.repository.js';
const connectionToDB = async () => {
    let connection;
    const numberOftryConnection = +POSTGRES_TRY;
    try {
        connection = await createConnection(dbConfig);
        for (let i = 0; i < numberOftryConnection; i += 1) {
            if (connection.isConnected) {
                await connection.runMigrations();
                logger('log', `Connected to DB!`);
                const admin = await findAdmin();
                if (!admin) {
                    await save({
                        name: 'admin',
                        login: 'admin',
                        password: 'admin',
                    });
                }
                break;
            }
            ;
            await connection.connect();
        }
    }
    catch (err) {
        const { name, message, stack } = err;
        const errorRecord = `
      errorName:    ${name}
      errorMessage: ${message}
      errorStack:   ${stack}\n`;
        logger('error', errorRecord);
    }
};
const tryToconnectDB = async (func) => {
    await connectionToDB();
    func();
};
export { tryToconnectDB };
