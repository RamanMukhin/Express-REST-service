import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { UserLoginDto } from './dto/user-login.dto';
import { LocalAuthGuard } from './quards/local-auth.guard';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  async login(@Body() userLoginDto: UserLoginDto) {

    return 'sucsess';
  }

}