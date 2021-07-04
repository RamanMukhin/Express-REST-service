import { Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './quards/local-auth.guard';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post()
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  async login(@Request() request) {
    return this.authService.login(request.user);
  }
}