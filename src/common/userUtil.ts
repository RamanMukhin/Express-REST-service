import bcrypt from 'bcrypt';
import { User, IUser, ILoginUser } from "../resources/users/user.model";

const toUser = async (userDto: IUser): Promise<IUser> => {
  const { name, login } = userDto;
  let { password } = userDto;
  const salt = await bcrypt.genSalt();
  password = await bcrypt.hash(password, salt);
  return { name, login, password };
};

const toUserDto = (requestBody: IUser): IUser => {
  const { name, login, password } = requestBody;
  return { name, login, password };
};

const toUpdateUser = (id: string, userUpdateFrom: IUser): User => {
  const { name, login, password } = userUpdateFrom;
  return { id, name, login, password };
};

const checkUser = async (userLogin: ILoginUser, user: User): Promise<boolean> => 
await bcrypt.compare(userLogin.password, user.password);

export { toUser, toUserDto, toUpdateUser, checkUser };
