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

// function toTask(newTask: ITask): Task {
//   return new Task({
//     title: newTask.title,
//     order: newTask.order,
//     description: newTask.description,
//     userId: newTask.userId!,
//     boardId: newTask.boardId,
//     columnId: newTask.columnId,
//   });
// }

function toUpdateTask(task: Task, taskUpdateFrom: ITask): void {
  Object.assign(task, taskUpdateFrom);
}

function findIndex(id: string, tasks: Task[]): number {
  return tasks.findIndex((task: Task) => task.id === id);
}

function findByBoardId(boardId: string, tasks: Task[]): Task[] {
  return tasks.filter((task) => task.boardId === boardId);
}

function findByUserId(userId: string, tasks: Task[]): Task[] {
  return tasks.filter((task: Task) => task.userId === userId);
}

export {
  toTaskDto,
  // toTask,
  toUpdateTask,
  findIndex,
  findByBoardId,
  findByUserId,
  ITask,
};
