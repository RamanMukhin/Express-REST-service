import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { toCreateUser, toUpdateUser } from 'src/common/userUtil';
import { DeleteResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }

  async getAll(): Promise<User[]> {
    return await this.usersRepository.getAll();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const readyToCreateUser = await toCreateUser(createUserDto);
    return await this.usersRepository.save(readyToCreateUser);
  }

  async find(id: string): Promise<User> {
    const user = await this.usersRepository.find(id);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await toUpdateUser(id, updateUserDto);
    return await this.usersRepository.update(updatedUser);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.usersRepository.remove(id);;
  }
}
