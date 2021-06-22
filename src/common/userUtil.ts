import { User, IUser } from "../resources/users/user.model";

const toUserDto = (requestBody: IUser): IUser => {
  const { name, login, password } = requestBody;
  return { name, login, password };
};

const toUpdateUser = (id: string, userUpdateFrom: IUser): User => {
  const { name, login, password } = userUpdateFrom;
  return { id, name, login, password };
};

export { toUserDto, toUpdateUser };
