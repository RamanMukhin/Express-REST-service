import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { UsersModule } from './resources/users/users.module';
import { BoardsModule } from './resources/boards/boards.module';
import { TasksModule } from './resources/tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UsersController } from './resources/users/users.controller';
import { TasksController } from './resources/tasks/tasks.controller';
import { BoardsController } from './resources/boards/boards.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [DbModule, AuthModule, UsersModule, BoardsModule, TasksModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService, Logger],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(AppController, AuthController, UsersController, BoardsController, TasksController);
  }
}
