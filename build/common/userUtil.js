const toUserDto = (requestBody) => {
    const { name, login, password } = requestBody;
    return { name, login, password };
};
const toUser = (id, userUpdateFrom) => {
    const { name, login, password } = userUpdateFrom;
    return { id, name, login, password };
};
export { toUserDto, toUser };
