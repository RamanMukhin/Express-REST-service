"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const uuid_1 = require("uuid");
/**
 * Class representing a Task
 */
class Task {
    /**
     * Create a task
     * @param {Object} param0 object create from
     */
    constructor({ id = uuid_1.v4(), title = 'TITLE', order = 0, description = 'description', userId = 'userId', boardId = 'boardId', columnId = 'columnId', } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }
}
exports.Task = Task;
