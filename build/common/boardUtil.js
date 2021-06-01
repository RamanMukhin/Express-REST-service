import { Board } from '../resources/boards/board.model.js';
import { Column } from '../resources/boards/column.model.js';
function toBoardDto(req) {
    return req.title;
}
function toColumnDto(req) {
    return req.columns;
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
function toUpdateColumns(columns, updateColumns) {
    for (let i = 0; i < updateColumns.length; i += 1) {
        const columnToUpdate = columns[i];
        const columnUpdateFrom = updateColumns[i];
        Object.assign(columnToUpdate, columnUpdateFrom);
    }
    return columns;
}
function updateBoard(board, updateTitle, updateColumns) {
    const { columns } = board;
    board.title = updateTitle;
    board.columns = toUpdateColumns(columns, updateColumns);
}
function findIndex(id, boards) {
    return boards.findIndex((board) => board.id === id);
}
export { toBoardDto, toColumnDto, toBoard, toColumn, updateBoard, toUpdateColumns, findIndex, };
