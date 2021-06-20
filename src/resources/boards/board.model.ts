import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from '../tasks/task.model.js';
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

  @OneToMany(() => Task, (task) => task.boardId, {
    cascade: true,
  })
  task!: Task[];
}
