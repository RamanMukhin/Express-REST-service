import { v4 as uuid } from 'uuid';
/**
 * Class representing a Column
 */
export class Column {
    /**
     * Create a column
     * @param {Object} param0 object create from
     */
    constructor({ id = uuid(), title = 'title', order = 0 } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
    }
}
