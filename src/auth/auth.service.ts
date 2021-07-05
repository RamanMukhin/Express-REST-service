import { User, ILoginUser } from '../resources/users/user.model.js';
import {findUser as findInRepo} from '../resources/users/user.service.js'

const findUser = async (userLogin: ILoginUser): Promise<User | undefined> => await findInRepo(userLogin);

export { findUser };