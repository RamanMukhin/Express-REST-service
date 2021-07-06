import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksRepository {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async getAll(): Promise<Task[]> {
    return await this.tasksRepository.find();
  }

  async save(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.tasksRepository.save(createTaskDto);
  }

  async find(id: string): Promise<Task | undefined> {
    return await this.tasksRepository.findOne(id);
  }

  async update(updateTaskDto: UpdateTaskDto): Promise<Task> {
    return await this.tasksRepository.save(updateTaskDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.tasksRepository.delete(id);
  }
}
