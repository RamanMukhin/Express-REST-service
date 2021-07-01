import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'src/common/dbConfig';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig)],
})
export class DbModule { }
