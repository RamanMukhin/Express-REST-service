"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.find = exports.save = exports.getAll = void 0;
const userUtil_1 = require("../../common/userUtil");
const users = [];
/**
 * Returns the array of users
 * @returns {Array} array of users
 */
const getAll = async () => users;
exports.getAll = getAll;
/**
 * Saves and returns given user
 * @param {Object} user given user
 * @returns {Object} user
 */
const save = async (user) => {
    users.push(user);
    return user;
};
exports.save = save;
/**
 * Searches and returns user by given id
 * @param {string} id given id
 * @returns {Object} user
 */
const find = async (id) => users.find((user) => user.id === id);
exports.find = find;
/**
 * Updates and returns the user with the given id
 * @param {Object} user user to update
 * @returns {Object} user
 */
const update = async (user) => {
    users.splice(userUtil_1.findIndex(user.id, users), 1, user);
    return user;
};
exports.update = update;
/**
 * Searches for a user with an accepted id in array and deletes it
 * @param {string} id
 */
const remove = async (id) => {
    users.splice(userUtil_1.findIndex(id, users), 1);
};
exports.remove = remove;
