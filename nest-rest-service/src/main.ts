import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';

async function bootstrap() {
  const { PORT } = process.env;
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
        new winston.transports.File({
          filename: './logs/logs.log',
          level: 'info',
        }),
        new winston.transports.File({
          filename: './logs/errors.log',
          level: 'warn',
        }),
      ],
      exceptionHandlers: [
        new winston.transports.File({
          filename: './logs/exceptions.log',
        }),
      ],
    }),
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

// throw new Error('sdbasbsBSbsBSBDSbvsV');

bootstrap();
