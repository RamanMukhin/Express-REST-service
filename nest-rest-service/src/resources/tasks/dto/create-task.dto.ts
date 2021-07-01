export class CreateTaskDto {
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string | Object;
  columnId: string | null;
}
