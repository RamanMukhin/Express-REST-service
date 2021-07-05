import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { IUser } from '../types/validate.user.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'login' });
  }

  async validate(login: string, password: string): Promise<IUser> {
    const userLoginDto = { login, password }
    const user = await this.authService.validateUser(userLoginDto);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}