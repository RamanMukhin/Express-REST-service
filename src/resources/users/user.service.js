const usersRepo = require('./user.memory.repository');
const userUtil = require('../../common/userUtil');
const tasksService = require('../tasks/task.service');

/**
 * Calls a function from the repository and returns an array of found users
 * @returns {Array}
 */
const getAll = () => usersRepo.getAll();

/**
 * Creates a new user, calls the repository function to save this new user, returns it
 * @param {Object} newUser 
 * @returns {Object}
 */
const create = (newUser) => {
  const user = userUtil.toUser(newUser);
  return usersRepo.save(user);
};

/**
 * Calls a function from the repository, passing the id to it, returns the found user
 * @param {string} id 
 * @returns {Object}
 */
const find = (id) => usersRepo.find(id);

/**
 * Accepts the id of the object to update and an object with parameters to update. Returns the updated user
 * @param {string} id 
 * @param {Object} updateUser 
 * @returns {Object}
 */
const update = async (id, updateUser) => {
  const user = await usersRepo.find(id);
  userUtil.updateUser(user, updateUser);
  return usersRepo.update(user);
};

/**
 * Calls a function from the repository to delete a user by id and a function from the task service to update tasks
 * @param {string} id 
 */
const remove = (id) => {
  usersRepo.remove(id);
  tasksService.updateWithUser(id);
};

module.exports = { getAll, create, find, update, remove };
