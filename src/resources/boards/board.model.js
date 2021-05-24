const uuid = require('uuid');
const Column = require('./column.model');

/**
 * Class representing a Board 
 */
class Board {
  /**
   * Create a board
   * @param {Object} param0 
   */
  constructor({
    id = uuid.v4(),
    title = 'TITLE',
    columns = [new Column()],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
