import { Board } from "../resources/boards/board.model";
import { Task, ITask } from "../resources/tasks/task.model";

const toTaskDto = (requestBody: ITask): ITask => {
  const { title, order, description, userId, boardId, columnId } = requestBody;
  return { title, order, description, userId, boardId, columnId };
};

const toTask = (boardId: Board, taskDto: ITask): ITask => {
  const { title, order, description, userId, columnId } = taskDto;
  return { title, order, description, userId, boardId, columnId };
};

const toUpdateTask = (id: string, taskUpdateFrom: ITask): Task => {
  const { title, order, description, userId, boardId, columnId } = taskUpdateFrom;
  return { id, title, order, description, userId, boardId, columnId };
};

export { toTaskDto, toUpdateTask, toTask };
