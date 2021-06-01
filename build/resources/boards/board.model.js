import { v4 as uuid } from 'uuid';
import { Column } from './column.model.js';
export class Board {
    constructor({ id = uuid(), title = 'TITLE', columns = [new Column()] } = {}) {
        this.id = id;
        this.title = title;
        this.columns = columns;
    }
}
