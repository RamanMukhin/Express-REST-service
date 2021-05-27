import { findIndex } from '../../common/userUtil';
import { User } from './user.model';

const users: User[] = [];

/**
 * Returns the array of users
 * @returns {Array} array of users
 */
const getAll = async () => users;

/**
 * Saves and returns given user
 * @param {Object} user given user
 * @returns {Object} user
 */
const save = async (user: User) => {
  users.push(user);
  return user;
};

/**
 * Searches and returns user by given id
 * @param {string} id given id
 * @returns {Object} user
 */
const find = async (id: string) => users.find((user) => user.id === id);

/**
 * Updates and returns the user with the given id
 * @param {Object} user user to update
 * @returns {Object} user
 */
const update = async (user: User) => {
  users.splice(findIndex(user.id, users), 1, user);
  return user;
};

/**
 * Searches for a user with an accepted id in array and deletes it
 * @param {string} id
 */
const remove = async (id: string) => {
  users.splice(findIndex(id, users), 1);
};

export { getAll, save, find, update, remove };
