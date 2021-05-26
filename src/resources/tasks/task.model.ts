import { v4 as uuid } from 'uuid';

/**
 * Class representing a Task
 */
export class Task {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string | null;

  boardId: string;

  columnId: string;

  /**
   * Create a task
   * @param {Object} param0 object create from
   */
  constructor({
    id = uuid(),
    title = 'TITLE',
    order = 0,
    description = 'description',
    userId = 'userId',
    boardId = 'boardId',
    columnId = 'columnId',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
