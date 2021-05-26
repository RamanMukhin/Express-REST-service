import * as dotenv from 'dotenv';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
dotenv.config({
    path: path.join(dirname(fileURLToPath(import.meta.url)), '../../.env'),
});
const { PORT } = process.env;
const { NODE_ENV } = process.env;
const { MONGO_CONNECTION_STRING } = process.env;
const { JWT_SECRET_KEY } = process.env;
const { AUTH_MODE } = process.env;
// const AUTH_MODE: boolean = AUTH_MODE === 'true';
export { PORT, NODE_ENV, MONGO_CONNECTION_STRING, JWT_SECRET_KEY, AUTH_MODE };
