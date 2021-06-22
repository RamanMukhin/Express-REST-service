import express from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { router as userRouter } from './resources/users/user.router.js';
import { router as boardRouter } from './resources/boards/board.router.js';
import { router as taskRouter } from './resources/tasks/task.router.js';
import { router as logEvents } from './middlewares/logging.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { uncaughtExceptionHandler, unhandledRejectionHandler } from './middlewares/uncaughtHandler.js';

const app = express();
const swaggerDocument = YAML.load(
  path.join(dirname(fileURLToPath(import.meta.url)), '../doc/api.yaml')
);

process.on('uncaughtException', (err) => {
  uncaughtExceptionHandler(err);
});

process.on('unhandledRejection', (reason, promise) => {
  unhandledRejectionHandler(reason, promise);
});

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(logEvents);

app.use('/users', userRouter);

app.use('/boards', boardRouter);

app.use('/boards', taskRouter);

app.use(errorHandler);

export { app };
