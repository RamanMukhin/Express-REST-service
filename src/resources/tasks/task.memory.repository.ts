import { getRepository } from 'typeorm';
import { Task } from './task.model.js';
import { ITask } from '../../common/taskUtil.js';

const getAll = async (): Promise<Task[]> => {
  const taskRepository = getRepository(Task);
  return await taskRepository.find({ where: {} });
};

const save = async (newTask: Task): Promise<Task> => {
  const taskRepository = getRepository(Task);
  return await taskRepository.save(newTask);
};

const find = async (id: string): Promise<Task | undefined> => {
  const taskRepository = getRepository(Task);
  return await taskRepository.findOne(id);
};

const update = async (id: string, taksUpdateFrom: ITask): Promise<void> => {
  const taskRepository = getRepository(Task);
  await taskRepository.update(id ,taksUpdateFrom);
};

const remove = async (id: string): Promise<void> => {
  const taskRepository = getRepository(Task);
  await taskRepository.delete(id);
};

// const removeTaskWithBoard = async (boardId: string): Promise<void> => {
//   const taskRepository = getRepository(Task);
//   // eslint-disable-next-line object-shorthand
//   const arrayTaskWithBoardId = await taskRepository.find({ boardId: boardId });
//   for (let i = 0; i < arrayTaskWithBoardId.length; i += 1) {
//     const { id } = arrayTaskWithBoardId[i]!;
//     await remove(id);
//   }
// };

// const updateTaskWithUser = async (userId: string): Promise<void> => {
//   const taskRepository = getRepository(Task);
//   // eslint-disable-next-line object-shorthand
//   const arrayTaskWithUserId = await taskRepository.find({ userId: userId });
//   for (let i = 0; i < arrayTaskWithUserId.length; i += 1) {
//     const { id } = arrayTaskWithUserId[i]!;
//     await taskRepository.update(id, { userId: null });
//   }
// };

export {
  getAll,
  save,
  find,
  update,
  remove,
  // removeTaskWithBoard,
 // updateTaskWithUser,
};
