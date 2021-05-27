"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const uuid_1 = require("uuid");
const column_model_1 = require("./column.model");
/**
 * Class representing a Board
 */
class Board {
    /**
     * Create a board
     * @param {Object} param0 object create from
     */
    constructor({ id = uuid_1.v4(), title = 'TITLE', columns = [new column_model_1.Column()] } = {}) {
        this.id = id;
        this.title = title;
        this.columns = columns;
    }
}
exports.Board = Board;
