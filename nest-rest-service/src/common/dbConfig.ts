import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Board } from 'src/resources/boards/entities/board.entity';
import { ColumnClass } from 'src/resources/boards/entities/column.entity';
// import * as dotenv from 'dotenv';
// import path from 'path';
import { User } from 'src/resources/users/entities/user.entity';

// dotenv.config({
//   path: path.join(__dirname, '../../.env'),
// });

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',//process.env.POSTGRES_HOST,
  port: 5432, //+process.env.POSTGRES_PORT,
  username: 'ROMA', //process.env.POSTGRES_USER,
  password: 'QWER', //process.env.POSTGRES_PASSWORD,
  database: 'BASA', // process.env.POSTGRES_DB,
  synchronize: true,
  // migrations: [Test21624208011527],
  // cli: { migrationsDir: 'migration' },
  entities: [User, Board, ColumnClass],
};