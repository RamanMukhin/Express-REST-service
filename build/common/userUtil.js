import { User } from '../resources/users/user.model.js';
function toUserDto(req) {
    return {
        name: req.name,
        login: req.login,
        password: req.password,
    };
}
function toUser(newUser) {
    return new User(newUser);
}
function toUpdateUser(user, update) {
    Object.assign(user, update);
}
function findIndex(id, users) {
    return users.findIndex((user) => user.id === id);
}
export { toUserDto, toUser, toUpdateUser, findIndex };
