"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findIndex = exports.toUpdateUser = exports.toUser = exports.toUserDto = void 0;
const user_model_1 = require("../resources/users/user.model");
/**
 * Creates and returns userdDto from the given req
 * @param {Object} req give request
 * @returns {Object} userDto
 */
function toUserDto(req) {
    return {
        name: req.name,
        login: req.login,
        password: req.password,
    };
}
exports.toUserDto = toUserDto;
/**
 * Creates and returns a new object of class User
 * @param {Object} newUser userDto
 * @returns {Object} new user
 */
function toUser(newUser) {
    return new user_model_1.User({
        name: newUser.name,
        login: newUser.login,
        password: newUser.password,
    });
}
exports.toUser = toUser;
/**
 * Updates given User object
 * @param {Object} user given object
 * @param {Object} update object update from
 */
function toUpdateUser(user, update) {
    user.name = update.name;
    user.login = update.login;
    user.password = update.password;
}
exports.toUpdateUser = toUpdateUser;
/**
 * Searches and returns the index of the object with given id
 * @param {string} id given id
 * @param {Array} users array for searching in
 * @returns {number} the index of the object with given id
 */
function findIndex(id, users) {
    return users.findIndex((user) => user.id === id);
}
exports.findIndex = findIndex;
