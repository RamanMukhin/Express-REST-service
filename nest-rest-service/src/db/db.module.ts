import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'src/common/dbConfig';
import { User } from 'src/resources/users/entities/user.entity';

@Module({
  imports: [ TypeOrmModule.forRoot(dbConfig)],
})
export class DbModule {}
