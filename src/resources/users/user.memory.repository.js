const userUtil = require('../../common/userUtil');

const users = [];

const getAll = async () => users;

const save = async (user) => {
  users.push(user);
  return user;
};

const find = async (id) => users.find( user => user.id === id);

const update = async (user) => {
  users.splice(userUtil.findIndex(user.id, users), 1, user);
  return user;
};

const remove = async (id) => {
    users.splice(userUtil.findIndex(id, users), 1) 
};

module.exports = { getAll, save, find, update, remove };
