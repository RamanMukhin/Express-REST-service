import { Task } from '../../tasks/entities/task.entity.js';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ColumnClass } from './column.entity.js';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @OneToMany(() => ColumnClass, (column) => column.board, {
    eager: true,
    cascade: true,
  })
  columns: ColumnClass[];

  @OneToMany(() => Task, (task) => task.boardId, {
    cascade: true,
  })
  tasks: Task[];
}
