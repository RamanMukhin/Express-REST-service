import express from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { finished } from 'stream';
import { router as userRouter } from './resources/users/user.router.js';
import { router as boardRouter } from './resources/boards/board.router.js';
import { router as taskRouter } from './resources/tasks/task.router.js';

const app = express();
const swaggerDocument = YAML.load(
  path.join(dirname(fileURLToPath(import.meta.url)), '../doc/api.yaml')
);
const writeStream = fs.createWriteStream('./logs.txt');

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use((req, res, next) => {
  const { method, url } = req;
  const start = Date.now(); // process.hrtime

  next();

  finished(res, () => {
    // npm package on-finished
    const ms = Date.now() - start;
    const { statusCode } = res;
    console.log(`${method} ${url} ${statusCode} [${ms}ms]`);
    const chunk: string = `${method} ${url} ${statusCode} [${ms}ms] \n`;
    writeStream.write(chunk);
  });
});

app.use('/users', userRouter);

app.use('/boards', boardRouter);

app.use('/boards', taskRouter);

export { app };
