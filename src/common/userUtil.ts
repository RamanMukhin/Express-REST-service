import { User } from '../resources/users/user.model.js';

interface IUser {
  id?: string;
  name: string;
  login: string;
  password: string;
}

function toUserDto(req: IUser) {
  return {
    name: req.name,
    login: req.login,
    password: req.password,
  };
}

function toUser(newUser: IUser) {
  return new User(newUser);
}

function toUpdateUser(user: User, update: IUser) {
  Object.assign(user, update );
}

function findIndex(id: string, users: User[]) {
  return users.findIndex((user) => user.id === id);
}

export { toUserDto, toUser, toUpdateUser, findIndex, IUser };
