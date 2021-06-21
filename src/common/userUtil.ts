interface IUser {
  id?: string;
  name: string;
  login: string;
  password: string;
}

function toUserDto(requestBody: IUser): IUser {
  return {
    name: requestBody.name,
    login: requestBody.login,
    password: requestBody.password,
  };
}

export { toUserDto, IUser };
