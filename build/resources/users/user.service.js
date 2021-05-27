"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.find = exports.create = exports.getAll = void 0;
const usersRepo = __importStar(require("./user.memory.repository"));
const userUtil_1 = require("../../common/userUtil");
const task_service_1 = require("../tasks/task.service");
/**
 * Returns all users
 * @returns {Array} array of users
 */
const getAll = () => usersRepo.getAll();
exports.getAll = getAll;
/**
 * Creates and returns a new user
 * @param {Object} newUser user create from
 * @returns {Object} new user
 */
const create = (newUser) => {
    const user = userUtil_1.toUser(newUser);
    return usersRepo.save(user);
};
exports.create = create;
/**
 * Returns the user by given id
 * @param {string} id given id
 * @returns {Object} the user
 */
const find = (id) => usersRepo.find(id);
exports.find = find;
/**
 * Updates the user by given id
 * @param {string} id given id
 * @param {Object} updateUser user update from
 * @returns {Object} the user
 */
const update = async (id, updateUser) => {
    const user = (await usersRepo.find(id));
    userUtil_1.toUpdateUser(user, updateUser);
    return usersRepo.update(user);
};
exports.update = update;
/**
 * Deletes user by given id and reassigned its tasks
 * @param {string} id given id
 */
const remove = (id) => {
    usersRepo.remove(id);
    task_service_1.updateWithUser(id);
};
exports.remove = remove;
