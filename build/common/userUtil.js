import { User } from '../resources/users/user.model.js';
function toUserDto(requestBody) {
    return {
        name: requestBody.name,
        login: requestBody.login,
        password: requestBody.password,
    };
}
function toUser(newUser) {
    return new User(newUser);
}
function toUpdateUser(user, userUpdateFrom) {
    Object.assign(user, userUpdateFrom);
}
function findIndex(id, users) {
    return users.findIndex((user) => user.id === id);
}
export { toUserDto, toUser, toUpdateUser, findIndex };
