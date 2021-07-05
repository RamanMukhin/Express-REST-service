import bcrypt from 'bcrypt';
const toUser = async (userDto) => {
    const { name, login } = userDto;
    let { password } = userDto;
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(password, salt);
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
const checkUser = async (userLogin, user) => await bcrypt.compare(userLogin.password, user.password);
export { toUser, toUserDto, toUpdateUser, checkUser };
