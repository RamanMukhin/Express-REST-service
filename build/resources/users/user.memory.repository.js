import { findIndex } from '../../common/userUtil.js';
const users = [];
const getAll = async () => users;
const save = async (user) => {
    users.push(user);
    return user;
};
const find = async (id) => users.find((user) => user.id === id);
const update = async (user) => {
    users.splice(findIndex(user.id, users), 1, user);
    return user;
};
const remove = async (id) => {
    users.splice(findIndex(id, users), 1);
};
export { getAll, save, find, update, remove };
