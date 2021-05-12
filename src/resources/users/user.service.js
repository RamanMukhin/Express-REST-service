const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const post = (req) => usersRepo.post(req);

const getById = (id) => usersRepo.getById(id);

module.exports = { getAll, post, getById };
