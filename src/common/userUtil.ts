import { User } from '../resources/users/user.model.js';

interface IUser {
  name: string;
  login: string;
  password: string;
}

/**
 * Creates and returns userdDto from the given request body
 * @param {Object} req give request body
 * @returns {Object} userDto
 */
function toUserDto(req: IUser) {
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
function toUser(newUser: IUser) {
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
function toUpdateUser(user: User, update: IUser) {
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

export { toUserDto, toUser, toUpdateUser, findIndex, IUser };
