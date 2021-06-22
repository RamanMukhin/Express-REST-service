const toBoardDto = (requestBody) => requestBody.title;
const toColumnDto = (requestBody) => requestBody.columns;
const toBoard = (title, columns) => {
    const boardCreateFrom = { title, columns };
    return boardCreateFrom;
};
export { toBoardDto, toColumnDto, toBoard };
