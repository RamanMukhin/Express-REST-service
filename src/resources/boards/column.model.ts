import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ColumnClass {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  order!: number;
}
