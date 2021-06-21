function toUserDto(requestBody) {
    return {
        name: requestBody.name,
        login: requestBody.login,
        password: requestBody.password,
    };
}
export { toUserDto };
