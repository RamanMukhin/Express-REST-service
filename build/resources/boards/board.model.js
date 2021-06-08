import { v4 as uuid } from 'uuid';
import { Column } from './column.model.js';
/**
 * Class representing a Board
 */
export class Board {
    /**
     * Create a board
     * @param {Object} param0 object create from
     */
    constructor({ id = uuid(), title = 'TITLE', columns = [new Column()] } = {}) {
        this.id = id;
        this.title = title;
        this.columns = columns;
    }
}
