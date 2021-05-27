"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findIndex = exports.toUpdateColumns = exports.updateBoard = exports.toColumn = exports.toBoard = exports.toColumnDto = exports.toBoardDto = void 0;
const board_model_1 = require("../resources/boards/board.model");
const column_model_1 = require("../resources/boards/column.model");
/**
 * Creates and returns boardDto from the given request body
 * @param {Object} req given request body
 * @returns {string} boardDto from the given req body
 */
function toBoardDto(req) {
    return req.title;
}
exports.toBoardDto = toBoardDto;
/**
 * Creates and returns columnDto from given request body
 * @param {Object} req given request body
 * @returns {Array} columnDto
 */
function toColumnDto(req) {
    return req.columns;
}
exports.toColumnDto = toColumnDto;
/**
 * Creates and returns a new object of class Board
 * @param {string} title boardDto
 * @param {Array} columns columns
 * @returns {Object} new object of class Board
 */
function toBoard(title, columns) {
    return new board_model_1.Board({
        title,
        columns,
    });
}
exports.toBoard = toBoard;
/**
 * Сreates an array of new objects of the Column class
 * @param {Array} columns columnDto
 * @returns {Array} columns
 */
function toColumn(columns) {
    const createdColumns = [];
    for (let i = 0; i < columns.length; i += 1) {
        createdColumns.push(new column_model_1.Column(columns[i]));
    }
    return createdColumns;
}
exports.toColumn = toColumn;
/**
 * Updates and returns array of columns
 * @param {Array} columns array to update
 * @param {Array} updateColumns array update from
 * @returns {Array} updated array of columns
 */
function toUpdateColumns(columns, updateColumns) {
    for (let i = 0; i < updateColumns.length; i += 1) {
        const columnToUpdate = columns[i];
        const columnUpdateFrom = updateColumns[i];
        columnToUpdate.title = columnUpdateFrom.title;
        columnToUpdate.order = columnUpdateFrom.order;
    }
    return columns;
}
exports.toUpdateColumns = toUpdateColumns;
/**
 * Updates given Board object
 * @param {Object} board given object
 * @param {string} updateTitle title update from
 * @param {Array} updateColumns columns update from
 */
function updateBoard(board, updateTitle, updateColumns) {
    const { columns } = board;
    board.title = updateTitle;
    board.columns = toUpdateColumns(columns, updateColumns);
}
exports.updateBoard = updateBoard;
/**
 * Searches and returns the index of the object with given id
 * @param {string} id given id
 * @param {Array} boards array for searching in
 * @returns {number} the index of the object with given id
 */
function findIndex(id, boards) {
    return boards.findIndex((board) => board.id === id);
}
exports.findIndex = findIndex;
