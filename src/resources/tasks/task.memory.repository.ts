import { Task } from './task.model.js';
import {
  findIndex,
  findByBoardId,
  findByUserId,
} from '../../common/taskUtil.js';

const tasks: Task[] = [];

const getAll = async () => tasks;

const save = async (task: Task) => {
  tasks.push(task);
  return task;
};

const find = async (id: string) => tasks.find((task) => task.id === id);

const update = async (task: Task) => {
  tasks.splice(findIndex(task.id, tasks), 1, task);
  return task;
};

const remove = async (id: string) => {
  tasks.splice(findIndex(id, tasks), 1);
};

const removeWithBoard = async (boardId: string) => {
  const arrayTaskWithBoardId = findByBoardId(boardId, tasks);
  for (let i = 0; i < arrayTaskWithBoardId.length; i += 1) {
    const {id} = arrayTaskWithBoardId[i]!;
    await remove(id);
  }
};

const findTasks = async (userId: string) => findByUserId(userId, tasks);

export { getAll, save, find, update, remove, removeWithBoard, findTasks };
