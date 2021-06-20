interface ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string;
  columnId: string;
}

function toTaskDto(requestBody: ITask): ITask {
  return {
    title: requestBody.title,
    order: requestBody.order,
    description: requestBody.description,
    userId: requestBody.userId!,
    boardId: requestBody.boardId,
    columnId: requestBody.columnId,
  };
}

export { toTaskDto, ITask };
