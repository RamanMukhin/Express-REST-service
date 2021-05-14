const User = require('../resources/users/user.model');

function toUserDto(req) {
  return {
    name: req.body.name,
    login: req.body.login,
    password: req.body.password,
  };
}

function toUser(newUser) {
  return new User({
    name: newUser.name,
    login: newUser.login,
    password: newUser.password,
  });
}

function updateUser(user, update) {
  user.name = update.name;
  user.login = update.login;
  user.password = update.password;
}

function findIndex(id, users) {
  return users.findIndex((user) => user.id === id);
}

module.exports = { toUserDto, toUser, updateUser, findIndex };
