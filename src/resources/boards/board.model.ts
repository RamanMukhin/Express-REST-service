import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ColumnClass } from './column.model.js';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @OneToMany(() => ColumnClass, (column) => column.board, {
    eager: true,
    cascade: true,
  })
  columns!: ColumnClass[];
}
