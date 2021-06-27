import { getRepository } from 'typeorm';
import { User } from '../resources/users/user.model.js';
function toUserDto(requestBody) {
    return {
        name: requestBody.name,
        login: requestBody.login,
        password: requestBody.password,
    };
}
function toUser(newUser) {
    const userRepository = getRepository(User);
    return userRepository.create(newUser);
}
function toUpdateUser(user, userUpdateFrom) {
    Object.assign(user, userUpdateFrom);
}
function findIndex(id, users) {
    return users.findIndex((user) => user.id === id);
}
export { toUserDto, toUser, toUpdateUser, findIndex };
