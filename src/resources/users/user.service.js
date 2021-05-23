const usersRepo = require('./user.memory.repository');
const userUtil = require('../../common/userUtil');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();

const create = (newUser) => {
  const user = userUtil.toUser(newUser);
  return usersRepo.save(user);
};

const find = (id) => usersRepo.find(id);

const update = async (id, updateUser) => {
  const user = await usersRepo.find(id);
  userUtil.updateUser(user, updateUser);
  return usersRepo.update(user);
};

const remove = (id) => {
  usersRepo.remove(id);
  tasksService.updateWithUser(id);
};

module.exports = { getAll, create, find, update, remove };
