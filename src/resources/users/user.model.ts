import { v4 as uuid } from 'uuid';

/**
 * Class representing a User
 */
export class User {
  id: string;

  name: string;

  login: string;

  password: string;

  /**
   * Create a user
   * @param {*} param0 object create from
   */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
