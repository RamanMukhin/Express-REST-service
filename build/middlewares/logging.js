import express from 'express';
import { finished } from 'stream';
import fs from 'fs';
const router = express.Router({ mergeParams: true });
const writeStream = fs.createWriteStream('./logs.txt');
let recordNumber = 1;
router.use((req, res, next) => {
    const receiptTime = new Date();
    const { method } = req;
    const url = `http://localhost:4000${req.baseUrl + req.url}`;
    const body = JSON.stringify(req.body);
    const query = JSON.stringify(req.query);
    next();
    finished(res, () => {
        const { statusCode } = res;
        const processTime = Date.now() - +receiptTime;
        const event = `
    Recording №       ${recordNumber}
    Request:
    receipt time:     ${receiptTime}
    method:           ${method}
    url:              ${url}
    body:             ${body}
    query parameters: ${query}
    processing time:  ${processTime} ms
    Responce:
    status code:      ${statusCode}\n`;
        writeStream.write(event);
        console.log(event);
        recordNumber += 1;
    });
});
export { router };
