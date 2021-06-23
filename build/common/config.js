import * as dotenv from 'dotenv';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
dotenv.config({
    path: path.join(dirname(fileURLToPath(import.meta.url)), '../../.env'),
});
const { PORT } = process.env;
const { NODE_ENV } = process.env;
const { MONGO_CONNECTION_STRING } = process.env;
const { SALT_OF_ROUNDS } = process.env;
const { JWT_SECRET_KEY } = process.env;
const { AUTH_MODE } = process.env;
const { POSTGRES_DB } = process.env;
const { POSTGRES_USER } = process.env;
const { POSTGRES_PASSWORD } = process.env;
const { POSTGRES_TRY } = process.env;
const { DB_PORT } = process.env;
const { DB_HOST } = process.env;
// const AUTH_MODE = process.env['AUTH_MODE'] === 'true';
export { PORT, NODE_ENV, MONGO_CONNECTION_STRING, SALT_OF_ROUNDS, JWT_SECRET_KEY, AUTH_MODE, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_TRY, DB_PORT, DB_HOST, };
