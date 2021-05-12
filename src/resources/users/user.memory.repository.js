const uuid = require('uuid');
const User = require("./user.model");

const users = [];

const getAll = async () => users;

const postUser = async (req) => {
  const newUser = new User({
    id : uuid.v4(),
    name : req.body.name,
    login : req.body.login,
    password : req.body.password,
  });
  users.push(newUser);
  return newUser;
};

const getById = async (id) => users.find( user => user.id === id);

const putUser = async (id, req) => {
  const index = users.findIndex( user => user.id === id);
  users[index].name = req.body.name;
  users[index].login = req.body.login;
  users[index].password = req.body.password; 
  return users[index];
};

const deleteUser = async (id) => {
  const index = users.findIndex( user => user.id === id);
  delete users[index].name;
  delete users[index].login;
  delete users[index].password; 
  users.splice(index, 1);
  
};

module.exports = { getAll, postUser, getById, putUser, deleteUser };
