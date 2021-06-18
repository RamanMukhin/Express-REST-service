import { getRepository } from 'typeorm';
import { Board } from '../resources/boards/board.model.js';
import { ColumnClass } from '../resources/boards/column.model.js';
function toBoardDto(requestBody) {
    return requestBody.title;
}
function toColumnDto(requestBody) {
    return requestBody.columns;
}
async function toBoard(title, columns) {
    const boardCreateFrom = { title, columns };
    const boardRepository = getRepository(Board);
    return boardRepository.create(boardCreateFrom);
}
async function toColumn(columns) {
    const columnRepository = getRepository(ColumnClass);
    const createdColumns = [];
    for (let i = 0; i < columns.length; i += 1) {
        const columnDto = columns[i];
        const newColumn = columnRepository.create(columnDto);
        createdColumns.push(newColumn);
    }
    return createdColumns;
}
async function toUpdateColumns(columnsToUpdate, columnsUpdateFrom) {
    const columnRepository = getRepository(ColumnClass);
    const updatedColumns = [];
    for (let i = 0; i < columnsToUpdate.length; i += 1) {
        const columnToUpdate = columnsToUpdate[i];
        const columnUpdateFrom = columnsUpdateFrom[i];
        const { id } = columnToUpdate;
        columnRepository.update(id, columnUpdateFrom);
        const updatedColumn = (await columnRepository.findOne(id));
        updatedColumns.push(updatedColumn);
    }
    return updatedColumns;
}
async function toUpdateBoard(boardToUpdate, titleUpdateFrom, columnsUpdateFrom) {
    const columnsToUpdate = boardToUpdate.columns;
    const updatedColumns = await toUpdateColumns(columnsToUpdate, columnsUpdateFrom);
    const boardUpdateFrom = {
        title: titleUpdateFrom,
        columns: updatedColumns,
    };
    return boardUpdateFrom;
}
function findIndex(id, boards) {
    return boards.findIndex((board) => board.id === id);
}
export { toBoardDto, toColumnDto, toBoard, toColumn, toUpdateBoard, toUpdateColumns, findIndex, };
