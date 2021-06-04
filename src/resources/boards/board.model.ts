import { v4 as uuid } from 'uuid';
import { IBoard } from '../../common/boardUtil.js';
import { Column } from './column.model.js';

export class Board {
  id: string;

  title: string;

  columns: Column[];

  constructor({ id = uuid(), title = 'TITLE', columns = [new Column()] }:IBoard) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
