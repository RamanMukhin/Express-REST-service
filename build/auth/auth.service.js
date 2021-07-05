import { findUser as findInRepo } from '../resources/users/user.service.js';
const findUser = async (userLogin) => await findInRepo(userLogin);
export { findUser };
