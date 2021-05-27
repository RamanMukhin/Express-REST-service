"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
const uuid_1 = require("uuid");
/**
 * Class representing a Column
 */
class Column {
    /**
     * Create a column
     * @param {Object} param0 object create from
     */
    constructor({ id = uuid_1.v4(), title = 'title', order = 0 } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
    }
}
exports.Column = Column;
