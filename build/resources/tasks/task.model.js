import { v4 as uuid } from 'uuid';
/**
 * Class representing a Task
 */
export class Task {
    /**
     * Create a task
     * @param {Object} param0 object create from
     */
    constructor({ id = uuid(), title = 'TITLE', order = 0, description = 'description', userId = 'userId', boardId = 'boardId', columnId = 'columnId', } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }
}
