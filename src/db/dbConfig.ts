import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/resources/users/entities/user.entity';
import { Board } from 'src/resources/boards/entities/board.entity';
import { ColumnClass } from 'src/resources/boards/entities/column.entity';
import { Task } from 'src/resources/tasks/entities/task.entity';
import * as dotenv from 'dotenv';
import { Test21624208011527 } from 'src/migrations/1625205508672-PostRefactoring';

dotenv.config();

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  migrationsRun: true,
  migrations: [Test21624208011527],
  cli: { migrationsDir: 'migration' },
  entities: [User, Board, ColumnClass, Task],
};
