const toBoardDto = (requestBody) => requestBody.title;
const toColumnDto = (requestBody) => requestBody.columns;
const toBoard = (title, columns) => Object({ title, columns });
const toUdateBoard = (id, title) => Object({ id, title });
export { toBoardDto, toColumnDto, toBoard, toUdateBoard };
