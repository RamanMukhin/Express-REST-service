import { Task } from '../resources/tasks/task.model.js';

interface ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string;
  columnId: string;
}

function toTask(newTask: ITask) {
  return new Task({
    title: newTask.title,
    order: newTask.order,
    description: newTask.description,
    userId: newTask.userId!,
    boardId: newTask.boardId,
    columnId: newTask.columnId,
  });
}

function toUpdateTask(task: Task, updateTask: ITask) {
  Object.assign(task, updateTask);
}

function findIndex(id: string | undefined, tasks: Task[]) {
  return tasks.findIndex((task: Task) => task.id === id);
}

function findByBoardId(boardId: string, tasks: Task[]) {
  return tasks.filter((task) => task.boardId === boardId);
}

function findByUserId(userId: string, tasks: Task[]) {
  return tasks.filter((task: Task) => task.userId === userId);
}

export { toTask, toUpdateTask, findIndex, findByBoardId, findByUserId, ITask };
