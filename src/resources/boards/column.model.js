const uuid = require('uuid');

/**
 * Class representing a Column
 */
class Column {
  /**
   * Create a column
   * @param {Object} param0 object create from
   */
  constructor({ id = uuid.v4(), title = 'title', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Column;
