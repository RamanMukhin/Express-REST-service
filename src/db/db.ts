import { createConnection, Connection, getConnection } from 'typeorm';
import { dbConfig } from '../common/ormconfig.js';

const connectionToDB = async () => {
  try {
    const connection: Connection = getConnection();
    if (connection) {
      if (!connection.isConnected) await connection.connect();
    } else {
      createConnection(dbConfig);
    }
    console.log(`Connected to DB!`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};


