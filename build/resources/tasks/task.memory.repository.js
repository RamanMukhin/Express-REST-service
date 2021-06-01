import { findIndex, findByBoardId, findByUserId, } from '../../common/taskUtil.js';
const tasks = [];
const getAll = async () => tasks;
const save = async (task) => {
    tasks.push(task);
    return task;
};
const find = async (id) => tasks.find((task) => task.id === id);
const update = async (task) => {
    tasks.splice(findIndex(task.id, tasks), 1, task);
    return task;
};
const remove = async (id) => {
    tasks.splice(findIndex(id, tasks), 1);
};
const removeWithBoard = async (boardId) => {
    const arrayTaskWithBoardId = findByBoardId(boardId, tasks);
    for (let i = 0; i < arrayTaskWithBoardId.length; i += 1) {
        const { id } = arrayTaskWithBoardId[i];
        tasks.splice(findIndex(id, tasks), 1);
    }
};
const findTasks = async (userId) => findByUserId(userId, tasks);
export { getAll, save, find, update, remove, removeWithBoard, findTasks };
