import { getRepository, DeleteResult } from 'typeorm';
import { Board, IBoard } from './board.model.js';
import { ColumnClass, IColumnClass } from './column.model.js';

const getAll = async (): Promise<Board[]> => await getRepository(Board).find();

const save = async (board: IBoard): Promise<Board> => await getRepository(Board).save(board);

const find = async (id: string): Promise<Board | undefined> => await getRepository(Board).findOne(id);

const update = async (board: Board): Promise<Board> => await getRepository(Board).save(board);

const remove = async (id: string): Promise<DeleteResult> => await getRepository(Board).delete(id);

const saveColumns = async (columnsCreateFrom: IColumnClass[]): Promise<ColumnClass[]> =>
  await Promise.all(columnsCreateFrom.map((column) => getRepository(ColumnClass).save(column)));

const updateColumns = async (columnsUpdateFrom: ColumnClass[]) => await getRepository(ColumnClass).save(columnsUpdateFrom);

export { getAll, save, find, update, remove, saveColumns, updateColumns };
