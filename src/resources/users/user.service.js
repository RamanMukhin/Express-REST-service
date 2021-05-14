const usersRepo = require('./user.memory.repository');
const userUtil = require('../../common/userUtil');

const getAll = () => usersRepo.getAll();

const create = (newUser) => {
    const user = userUtil.toUser(newUser);
    return usersRepo.save(user);
}; 

const find = (id) => usersRepo.find(id);

const update = async (id, updateUser) => {
    const user = await usersRepo.find(id);
    user.name = updateUser.name;
    user.login = updateUser.login;
    user.password = updateUser.password;
    return usersRepo.update(user);
} 


const remove = (id) => usersRepo.remove(id);

module.exports = { getAll, create, find, update, remove };
