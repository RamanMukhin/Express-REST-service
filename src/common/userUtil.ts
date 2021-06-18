import { getRepository } from 'typeorm';
import { User } from '../resources/users/user.model.js';

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

function toUser(newUser: IUser): User {
  const userRepository = getRepository(User);
  return userRepository.create(newUser); 
}

function toUpdateUser(user: User, userUpdateFrom: IUser): void {
  Object.assign(user, userUpdateFrom);
}

function findIndex(id: string, users: User[]): number {
  return users.findIndex((user) => user.id === id);
}

export { toUserDto, toUser, toUpdateUser, findIndex, IUser };
