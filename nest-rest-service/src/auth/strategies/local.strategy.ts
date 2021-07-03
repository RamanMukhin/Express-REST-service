import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';



@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, pass: string) {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAA');
    const login = username;
    const password = pass;
    const userLoginDto = { login, password }

    const user = await this.authService.validateUser(userLoginDto);
    if (!user) {
      console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAA');
      throw new UnauthorizedException();
    }
    return user;
  }
}