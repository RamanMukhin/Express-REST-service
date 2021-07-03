import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

// import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
// import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { UserLoginDto } from './dto/user-login.dto';
import { LocalAuthGuard } from './quards/local-auth.guard';
import { AuthGuard } from '@nestjs/passport';



@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post()
  @UseGuards(AuthGuard('local'))
  @HttpCode(200)
  async login(@Body() userLoginDto: UserLoginDto) {
    // const payload = await this.authService.validateUser(userLoginDto);

    // payload ? payload: "НЕТ ТАКОГО";
    return 'sucsess';
  }


}