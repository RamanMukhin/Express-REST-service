const User = require('../resources/users/user.model');

/**
 * Creates an object from the request  to create a new user and returns it
 * @param {Object} req 
 * @returns {Object}
 */
function toUserDto(req) {
  return {
    name: req.body.name,
    login: req.body.login,
    password: req.body.password,
  };
}

/**
 * Creates a new object of class User and returns it
 * @param {Object} newUser 
 * @returns {Object}
 */
function toUser(newUser) {
  return new User({
    name: newUser.name,
    login: newUser.login,
    password: newUser.password,
  });
}

/**
 * Accepts two objects: one to be updated and an object with properties to be updated
 * @param {Object} user 
 * @param {Object} update 
 */
function updateUser(user, update) {
  user.name = update.name;
  user.login = update.login;
  user.password = update.password;
}

/**
 * Returns the index of the object in the received array by the received id
 * @param {string} id 
 * @param {Array} users 
 * @returns {number}
 */
function findIndex(id, users) {
  return users.findIndex((user) => user.id === id);
}

module.exports = { toUserDto, toUser, updateUser, findIndex };
