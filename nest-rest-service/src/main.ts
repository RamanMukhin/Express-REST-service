import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  const { PORT, USE_FASTIFY } = process.env;

  const Adapter =
    USE_FASTIFY === 'true'
      ? FastifyAdapter
      : ExpressAdapter;

  const app = await NestFactory.create(AppModule, new Adapter(), {
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
          filename: './logs/uncaughtExceptions.log',
        }),
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
          ),
        })
      ],
      exitOnError: true,
    }),
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log('You use', Adapter, '!');
}

bootstrap();
