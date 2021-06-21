function toBoardDto(requestBody) {
    return requestBody.title;
}
function toColumnDto(requestBody) {
    return requestBody.columns;
}
function toBoard(title, columns) {
    const boardCreateFrom = { title, columns };
    return boardCreateFrom;
}
export { toBoardDto, toColumnDto, toBoard };
