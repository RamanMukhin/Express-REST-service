import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { Task } from '../tasks/task.model.js';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  // @OneToMany(() => Task, task => task.userId)
  id!: string;

  @Column()
  name!: string;

  @Column()
  login!: string;

  @Column()
  password!: string;

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
