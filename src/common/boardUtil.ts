import { Board, IBoard } from '../resources/boards/board.model.js';
import { ColumnClass, IColumnClass } from '../resources/boards/column.model.js';

const toBoardDto = (requestBody: IBoard): string => requestBody.title;

const toColumnDto = (requestBody: IBoard): IColumnClass[] => requestBody.columns;

const toBoard = (title: string, columns: ColumnClass[]): IBoard => Object({ title, columns });

const toUdateBoard = (id: string, title: string): Board => Object({ id, title });

export { toBoardDto, toColumnDto, toBoard, toUdateBoard };
