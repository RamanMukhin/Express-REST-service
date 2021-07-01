import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { UsersModule } from './resources/users/users.module';
import { BoardsModule } from './resources/boards/boards.module';


@Module({
  imports: [DbModule, UsersModule, BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
