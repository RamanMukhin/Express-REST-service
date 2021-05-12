const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const post = (req) => usersRepo.post(req);

module.exports = { getAll, post };
