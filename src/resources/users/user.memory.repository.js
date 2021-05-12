const uuid = require('uuid');
const User = require("./user.model");

const users = [];

const getAll = async () => 
  // TODO: mock implementation. should be replaced during task development
   users
;

const post = async (req) => {
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

module.exports = { getAll, post, getById };
