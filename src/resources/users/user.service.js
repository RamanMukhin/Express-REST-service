const usersRepo = require('./user.memory.repository');
const userUtil = require('../../common/userUtil');

const getAll = () => usersRepo.getAll();

const create = (newUser) => {
    const user = userUtil.toUser(newUser);
    return usersRepo.save(user);
}; 

const getById = (id) => usersRepo.getById(id);

const putUser = (id, req) => usersRepo.putUser(id, req);

const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAll, create, getById, putUser, deleteUser };
