import { User } from '../resources/users/user.model.js';

/**
 * Creates and returns userdDto from the given req
 * @param {Object} req give request
 * @returns {Object} userDto
 */
function toUserDto(req: { name: string; login: string; password: string }) {
  return {
    name: req.name,
    login: req.login,
    password: req.password,
  };
}

/**
 * Creates and returns a new object of class User
 * @param {Object} newUser userDto
 * @returns {Object} new user
 */
function toUser(newUser: { name: string; login: string; password: string }) {
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
function toUpdateUser(
  user: User,
  update: { name: string; login: string; password: string }
) {
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
function findIndex(id: string, users: User[]) {
  return users.findIndex((user) => user.id === id);
}

export { toUserDto, toUser, toUpdateUser, findIndex };
