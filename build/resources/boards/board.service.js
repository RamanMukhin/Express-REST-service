"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.find = exports.create = exports.getAll = void 0;
const boardsRepo = __importStar(require("./board.memory.repository"));
const boardUtil_1 = require("../../common/boardUtil");
const task_service_1 = require("../tasks/task.service");
/**
 * Returns all boards
 * @returns {Array} array of boards
 */
const getAll = () => boardsRepo.getAll();
exports.getAll = getAll;
/**
 * Creates and returns a new board
 * @param {string} title the board title
 * @param {Array} columns the board columns
 * @returns {Object} new board
 */
const create = (title, columns) => {
    const board = boardUtil_1.toBoard(title, boardUtil_1.toColumn(columns));
    return boardsRepo.save(board);
};
exports.create = create;
/**
 * Returns the board by given id
 * @param {string} id given id
 * @returns {Object} the board
 */
const find = (id) => boardsRepo.find(id);
exports.find = find;
/**
 * Updates the board by given id
 * @param {string} id given id
 * @param {string} updateTitle title update from
 * @param {Array} updateColumns columns update from
 * @returns {Object} updated board
 */
const update = async (id, updateTitle, updateColumns) => {
    const board = (await boardsRepo.find(id));
    const columnsToUpdate = board.columns;
    board.title = updateTitle;
    board.columns = boardUtil_1.toUpdateColumns(columnsToUpdate, updateColumns);
    return boardsRepo.update(board);
};
exports.update = update;
/**
 * Deletes board and its tasks
 * @param {string} id id of board to delete
 */
const remove = (id) => {
    boardsRepo.remove(id);
    task_service_1.removeWithBoard(id);
};
exports.remove = remove;
