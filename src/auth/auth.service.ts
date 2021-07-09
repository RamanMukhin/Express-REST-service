import { Injectable } from '@nestjs/common';
import { checkUser } from 'src/common/userUtil';
import { UsersService } from 'src/resources/users/users.service';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';
import { IUser } from './types/validate.user.interface';
import { Ipayload } from './types/payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userLoginDto: UserLoginDto): Promise<IUser | null> {
    const user = await this.usersService.findUserbyLogin(userLoginDto.login);
    if (user) {
      const truePassword = await checkUser(user, userLoginDto.password);
      if (truePassword) {
        const { id, name, login } = user;
        return { id, name, login };
      }
    }
    return null;
  }

  async login(user: IUser): Promise<{ message: string; token: string }> {
    const { id, login } = user;
    const payload: Ipayload = { id, login };
    return {
      message: 'Successfully authorized',
      token: this.jwtService.sign(payload),
    };
  }
}
