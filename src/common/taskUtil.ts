import { UpdateTaskDto } from 'src/resources/tasks/dto/update-task.dto';

const toUpdateTask = (
  id: string,
  updateTaskDto: UpdateTaskDto,
): UpdateTaskDto => {
  const { title, order, description, userId, boardId, columnId } =
    updateTaskDto;
  return { id, title, order, description, userId, boardId, columnId };
};

export { toUpdateTask };
