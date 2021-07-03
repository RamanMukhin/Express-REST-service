import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async getAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async save(createUserDto: CreateUserDto): Promise<User> {
    return await this.usersRepository.save(createUserDto);
  }

  async find(id: string): Promise<User | undefined> {
    return await this.usersRepository.findOne(id);
  }

  async findUserbyLogin(login: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: { login: login } });
  }

  async update(updateUserDto: UpdateUserDto): Promise<User> {
    return await this.usersRepository.save(updateUserDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
