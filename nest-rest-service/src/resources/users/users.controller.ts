import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async getAll() {
    const users = await this.usersService.getAll();
    return users.map(User.toResponse);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return User.toResponse(user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.isUser(id);
    return User.toResponse(user);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    await this.isUser(id);
    const user = await this.usersService.update(id, updateUserDto);
    return User.toResponse(user);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.isUser(id);
    return await this.usersService.remove(id);
  }

  async isUser(id: string) {
    const user = await this.usersService.find(id);
    if (!user) throw new NotFoundException();
    return user;
  }
}
