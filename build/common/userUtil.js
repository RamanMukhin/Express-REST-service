import bcrypt from 'bcrypt';
import { SALT_OF_ROUNDS } from './config';
const toUser = async (userDto) => {
    const { name, login } = userDto;
    let { password } = userDto;
    password = await bcrypt.hash(password, SALT_OF_ROUNDS);
    return { name, login, password };
};
const toUserDto = (requestBody) => {
    const { name, login, password } = requestBody;
    return { name, login, password };
};
const toUpdateUser = (id, userUpdateFrom) => {
    const { name, login, password } = userUpdateFrom;
    return { id, name, login, password };
};
export { toUser, toUserDto, toUpdateUser };
