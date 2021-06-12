import { Board } from '../resources/boards/board.model.js';
import { Column } from '../resources/boards/column.model.js';
function toBoardDto(requestBody) {
    return requestBody.title;
}
function toColumnDto(requestBody) {
    return requestBody.columns;
}
function toBoard(title, columns) {
    return new Board({
        title,
        columns,
    });
}
function toColumn(columns) {
    const createdColumns = [];
    for (let i = 0; i < columns.length; i += 1) {
        createdColumns.push(new Column(columns[i]));
    }
    return createdColumns;
}
function toUpdateColumns(columnsToUpdate, columnsUpdateFrom) {
    for (let i = 0; i < columnsUpdateFrom.length; i += 1) {
        const columnToUpdate = columnsToUpdate[i];
        const columnUpdateFrom = columnsUpdateFrom[i];
        Object.assign(columnToUpdate, columnUpdateFrom);
    }
    return columnsToUpdate;
}
function toUpdateBoard(board, titleUpdateFrom, columnsUpdateFrom) {
    const columnsToUpdate = board.columns;
    board.title = titleUpdateFrom;
    board.columns = toUpdateColumns(columnsToUpdate, columnsUpdateFrom);
}
function findIndex(id, boards) {
    return boards.findIndex((board) => board.id === id);
}
export { toBoardDto, toColumnDto, toBoard, toColumn, toUpdateBoard, toUpdateColumns, findIndex, };
