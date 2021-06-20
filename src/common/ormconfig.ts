import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { User } from '../resources/users/user.model.js';
import { Board } from '../resources/boards/board.model.js';
import { ColumnClass } from '../resources/boards/column.model.js';
import { Task } from '../resources/tasks/task.model.js';
import { Test21624208011527 } from '../migration/1624208011527-Test2.js';

dotenv.config({
  path: path.join(dirname(fileURLToPath(import.meta.url)), '../../.env'),
});

const { POSTGRES_HOST } = process.env;
const { POSTGRES_PORT } = process.env;
const { POSTGRES_USER } = process.env;
const { POSTGRES_PASSWORD } = process.env;
const { POSTGRES_DB } = process.env;

export const dbConfig: ConnectionOptions = {
  type: 'postgres',
  host: POSTGRES_HOST,
  port: +POSTGRES_PORT!,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: false,
  migrations: [Test21624208011527],
  cli: { migrationsDir: 'migration' },
  entities: [User, ColumnClass, Board, Task],
};
