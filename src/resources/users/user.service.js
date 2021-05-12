const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const postUser = (req) => usersRepo.postUser(req);

const getById = (id) => usersRepo.getById(id);

const putUser = (id, req) => usersRepo.putUser(id, req);

module.exports = { getAll, postUser, getById, putUser };
