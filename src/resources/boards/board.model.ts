import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ColumnClass } from './column.model.js';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  columns!: ColumnClass[];
}
