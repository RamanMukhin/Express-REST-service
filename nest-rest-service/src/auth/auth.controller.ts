import { Controller, HttpCode, Post, Request, UseFilters, UseGuards } from '@nestjs/common';
import { AllExceptionsFilter } from 'src/middleware/exception.middleware';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './quards/local-auth.guard';

@UseFilters(AllExceptionsFilter)
@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post()
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  async login(@Request() request) {

    // throw new Error('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    return this.authService.login(request.user);
  }
}