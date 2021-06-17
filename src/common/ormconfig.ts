import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config({
  path: path.join(dirname(fileURLToPath(import.meta.url)), '../../.env'),
});

const { TYPE } = process.env;
const { DB_HOST } = process.env;
const { DB_PORT } = process.env;
const { POSTGRES_USER } = process.env;
const { POSTGRES_PASSWORD } = process.env;
const { POSTGRES_DB } = process.env;

export const dbConfig = {
  type: TYPE,
  host: DB_HOST,
  port: DB_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
} as ConnectionOptions;
