const usersRepo = require('./user.memory.repository');
const userUtil = require('../../common/userUtil');
const tasksService = require('../tasks/task.service');

/**
 * Returns all users
 * @returns {Array} array of users
 */
const getAll = () => usersRepo.getAll();

/**
 * Creates and returns a new user
 * @param {Object} newUser user create from
 * @returns {Object} new user
 */
const create = (newUser) => {
  const user = userUtil.toUser(newUser);
  return usersRepo.save(user);
};

/**
 * Returns the user by given id
 * @param {string} id given id
 * @returns {Object} the user
 */
const find = (id) => usersRepo.find(id);

/**
 * Updates the user by given id
 * @param {string} id given id
 * @param {Object} updateUser user update from
 * @returns {Object} the user
 */
const update = async (id, updateUser) => {
  const user = await usersRepo.find(id);
  userUtil.updateUser(user, updateUser);
  return usersRepo.update(user);
};

/**
 * Deletes user by given id and reassigned its tasks
 * @param {string} id given id
 */
const remove = (id) => {
  usersRepo.remove(id);
  tasksService.updateWithUser(id);
};

module.exports = { getAll, create, find, update, remove };
