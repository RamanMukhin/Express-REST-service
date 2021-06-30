import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/resources/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/resources/users/dto/update-user.dto';

const toCreateUser = async (createUserDto: CreateUserDto): Promise<CreateUserDto> => {
  const { name, login } = createUserDto;
  let { password } = createUserDto;
  const salt = await bcrypt.genSalt();
  password = await bcrypt.hash(password, salt);
  return { name, login, password };
};

const toUpdateUser = async (id: string, updateUserDto: UpdateUserDto): Promise<UpdateUserDto> => {
  const { name, login } = updateUserDto;
  let { password } = updateUserDto;
  const salt = await bcrypt.genSalt();
  password = await bcrypt.hash(password, salt);
  return { id, name, login, password };
};

// const checkUser = async (userLogin: ILoginUser, user: User): Promise<boolean> => 
// await bcrypt.compare(userLogin.password, user.password);

export { toCreateUser, toUpdateUser };
