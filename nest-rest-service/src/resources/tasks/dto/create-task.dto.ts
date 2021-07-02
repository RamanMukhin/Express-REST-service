import { IsString, IsInt } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;
  @IsInt()
  order: number;
  @IsString()
  description: string;
  userId: string | null;
  boardId: string | Object;
  columnId: string | null;
}
