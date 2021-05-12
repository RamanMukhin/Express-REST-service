const uuid = require('uuid');

class Board {
  constructor({
    id = uuid.v4(),
    title = 'TITLE',
    columns = 'COLUMNS',
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
