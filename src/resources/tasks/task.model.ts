import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Board } from '../boards/board.model.js';
import { User } from '../users/user.model.js';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  title!: string;

  @Column()
  order!: number;

  @Column()
  description!: string;

  @ManyToOne(() => User, {
    nullable: true,
    eager: true,
    onDelete: 'SET NULL',
  })
  userId!: string | null;

  @ManyToOne(() => Board, (board) => board.task, {
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  boardId!: Object;

  @Column({ nullable: true })
  columnId!: string;

  static toResponse(task: Task) {
    const { id, title, order, description, userId, columnId } = task;
    const board = <Board>task.boardId;
    const boardId = (!board)? null : board.id;
    return { id, title, order, description, userId, boardId, columnId };
  }
}
