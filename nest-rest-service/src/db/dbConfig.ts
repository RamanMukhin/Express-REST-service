import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/resources/users/entities/user.entity';
import { Board } from 'src/resources/boards/entities/board.entity';
import { ColumnClass } from 'src/resources/boards/entities/column.entity';
import { Task } from 'src/resources/tasks/entities/task.entity';
import * as dotenv from 'dotenv'

dotenv.config();

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',//process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  // migrations: [Test21624208011527],
  // cli: { migrationsDir: 'migration' },
  entities: [User, Board, ColumnClass, Task],
};