import { Task } from '../resources/tasks/task.model.js';
function toTask(newTask) {
    return new Task({
        title: newTask.title,
        order: newTask.order,
        description: newTask.description,
        userId: newTask.userId,
        boardId: newTask.boardId,
        columnId: newTask.columnId,
    });
}
function toUpdateTask(task, updateTask) {
    Object.assign(task, updateTask);
}
function findIndex(id, tasks) {
    return tasks.findIndex((task) => task.id === id);
}
function findByBoardId(boardId, tasks) {
    return tasks.filter((task) => task.boardId === boardId);
}
function findByUserId(userId, tasks) {
    return tasks.filter((task) => task.userId === userId);
}
export { toTask, toUpdateTask, findIndex, findByBoardId, findByUserId };
