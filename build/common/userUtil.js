import { User } from '../resources/users/user.model.js';
/**
 * Creates and returns userdDto from the given request body
 * @param {Object} req give request body
 * @returns {Object} userDto
 */
function toUserDto(req) {
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
function toUser(newUser) {
    return new User(newUser);
}
/**
 * Updates given User object
 * @param {Object} user given object
 * @param {Object} update object update from
 */
function toUpdateUser(user, update) {
    Object.assign(user, update);
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
export { toUserDto, toUser, toUpdateUser, findIndex };
