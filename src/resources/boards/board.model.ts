import { v4 as uuid } from 'uuid';
import { Column } from './column.model';

/**
 * Class representing a Board
 */
export class Board {
  id: string;

  title: string;

  columns: Column[];

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
