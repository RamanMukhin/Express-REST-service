const userUtil = require('../../common/userUtil');

const users = [];

/**
 * Returns an array of users
 * @returns {Array}
 */
const getAll = async () => users;

/**
 * Saves the accepted user and returns it
 * @param {Object} user 
 * @returns {Object}
 */
const save = async (user) => {
  users.push(user);
  return user;
};

/**
 * Searches for a user with an accepted id in array and returns it
 * @param {string} id 
 * @returns {Object}
 */
const find = async (id) => users.find((user) => user.id === id);

/**
 * Updates the user with the accepted id and returns it
 * @param {Object} user 
 * @returns {Object}
 */
const update = async (user) => {
  users.splice(userUtil.findIndex(user.id, users), 1, user);
  return user;
};

/**
 * Searches for a user with an accepted id in array and deletes it
 * @param {string} id 
 */
const remove = async (id) => {
  users.splice(userUtil.findIndex(id, users), 1);
};

module.exports = { getAll, save, find, update, remove };
