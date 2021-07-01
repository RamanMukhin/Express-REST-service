import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'src/db/dbConfig';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig)],
})
export class DbModule { }
