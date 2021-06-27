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
async function toColumn(columnsCreateFrom) {
    const columnRepository = getRepository(ColumnClass);
    const createdColumns = [];
    for (let i = 0; i < columnsCreateFrom.length; i += 1) {
        const columnDto = columnsCreateFrom[i];
        const newColumn = await columnRepository.save(columnDto);
        createdColumns.push(newColumn);
    }
    return createdColumns;
}
async function toUpdateColumns(columnsUpdateFrom) {
    const columnRepository = getRepository(ColumnClass);
    await columnRepository.save(columnsUpdateFrom);
}
// async function toUpdateBoard(
//   boardToUpdate: Board,
//   titleUpdateFrom: string
// ): Promise<IBoard> {
//   const { id } = boardToUpdate;
//   return boardUpdateFrom;
// }
function findIndex(id, boards) {
    return boards.findIndex((board) => board.id === id);
}
export { toBoardDto, toColumnDto, toBoard, toColumn, 
// toUpdateBoard,
toUpdateColumns, findIndex, };
