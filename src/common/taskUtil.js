const Task = require('../resources/tasks/task.model');

function toTask(newTask) {
  return new Task(newTask);
}

function toUpdateTask(task, updateTask) {
  task.title = updateTask.title;
  task.order = updateTask.order;
  task.description = updateTask.description;
  task.userId = updateTask.userId;
  task.boardId = updateTask.boardId;
  task.columnId = updateTask.columnId;
  return task;
}

function findIndex(id, boards) {
  return boards.findIndex((board) => board.id === id);
}

function findByBoardId(boardId, tasks) {
  return tasks.filter((task) => task.boardId === boardId);
}

function findByUserId(userId, tasks) {
  return tasks.filter((task) => task.userId === userId);
}

module.exports = {
  toTask,
  toUpdateTask,
  findIndex,
  findByBoardId,
  findByUserId,
};
