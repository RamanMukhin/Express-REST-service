import { Task } from './task.model.js';
import {
  findIndex,
  findByBoardId,
  findByUserId,
} from '../../common/taskUtil.js';

const tasks: Task[] = [];

const getAll = async (): Promise<Task[]> => tasks;

const save = async (task: Task): Promise<Task> => {
  tasks.push(task);
  return task;
};

const find = async (id: string): Promise<Task | undefined> =>
  tasks.find((task) => task.id === id);

const update = async (task: Task): Promise<Task> => {
  tasks.splice(findIndex(task.id, tasks), 1, task);
  return task;
};

const remove = async (id: string): Promise<void> => {
  tasks.splice(findIndex(id, tasks), 1);
};

const removeTaskWithBoard = async (boardId: string): Promise<void> => {
  const arrayTaskWithBoardId = findByBoardId(boardId, tasks);
  for (let i = 0; i < arrayTaskWithBoardId.length; i += 1) {
    const { id } = arrayTaskWithBoardId[i]!;
    await remove(id);
  }
};

const findTasks = async (userId: string): Promise<Task[]> =>
  findByUserId(userId, tasks);

export { getAll, save, find, update, remove, removeTaskWithBoard, findTasks };
