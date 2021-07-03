import { Injectable } from '@nestjs/common';
import { checkUser } from 'src/common/userUtil';
import { UsersService } from 'src/resources/users/users.service';
import { UserLoginDto } from './dto/user-login.dto';
import { Ipayload } from './types/payload.interface';


@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) { }

  async validateUser(userLoginDto: UserLoginDto): Promise<Ipayload | null> {
    const user = await this.usersService.findUserbyLogin(userLoginDto.login);
    if (user) {
      const truePassword = await checkUser(user, userLoginDto.password);
      if (truePassword) {
        const { password, name, ...result } = user;
        return result;
      }
    }
    return null;
  }

  // async login(user: User) {
  //   const payload = { username: user.username, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };

}
