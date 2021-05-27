"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.find = exports.save = exports.getAll = void 0;
const boardUtil_1 = require("../../common/boardUtil");
const boards = [];
/**
 * Returns the array of boards
 * @returns {Array} the array of boards
 */
const getAll = async () => boards;
exports.getAll = getAll;
/**
 * Saves and returns given board
 * @param {Object} board given board
 * @returns {Object} board
 */
const save = async (board) => {
    boards.push(board);
    return board;
};
exports.save = save;
/**
 * Searches and returns board by given id
 * @param {string} id given id
 * @returns {Object} board
 */
const find = async (id) => boards.find((board) => board.id === id);
exports.find = find;
/**
 * Updates and returns the board with the given id
 * @param {Object} board board to update
 * @returns {Object} board
 */
const update = async (board) => {
    boards.splice(boardUtil_1.findIndex(board.id, boards), 1, board);
    return board;
};
exports.update = update;
/**
 * Deletes user by given id
 * @param {string} id given id
 */
const remove = async (id) => {
    boards.splice(boardUtil_1.findIndex(id, boards), 1);
};
exports.remove = remove;
