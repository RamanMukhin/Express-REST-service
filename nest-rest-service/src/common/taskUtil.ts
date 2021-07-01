import { CreateTaskDto } from "src/resources/tasks/dto/create-task.dto";
import { UpdateTaskDto } from "src/resources/tasks/dto/update-task.dto";

// const toCreateTask = (createTaskDto: CreateTaskDto): ITask => {
//   const { title, order, description, userId, columnId } = taskDto;
//   return { title, order, description, userId, boardId, columnId };
// };

const toUpdateTask = (id: string, updateTaskDto: UpdateTaskDto): UpdateTaskDto => {
  const { title, order, description, userId, boardId, columnId } = updateTaskDto;
  return { id, title, order, description, userId, boardId, columnId };
};

export { toUpdateTask };
