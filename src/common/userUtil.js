const User = require('../resources/users/user.model');

/**
 * Creates and returns userdDto from the given req
 * @param {Object} req give request
 * @returns {Object} userDto
 */
function toUserDto(req) {
  return {
    name: req.body.name,
    login: req.body.login,
    password: req.body.password,
  };
}

/**
 * Creates and returns a new object of class User
 * @param {Object} newUser userDto
 * @returns {Object} new user
 */
function toUser(newUser) {
  return new User({
    name: newUser.name,
    login: newUser.login,
    password: newUser.password,
  });
}

/**
 * Updates given User object
 * @param {Object} user given object
 * @param {Object} update object update from
 */
function updateUser(user, update) {
  user.name = update.name;
  user.login = update.login;
  user.password = update.password;
}

/**
 * Searches and returns the index of the object with given id
 * @param {string} id given id
 * @param {Array} users array for searching in
 * @returns {number} the index of the object with given id
 */
function findIndex(id, users) {
  return users.findIndex((user) => user.id === id);
}

module.exports = { toUserDto, toUser, updateUser, findIndex };
