import { Injectable } from '@nestjs/common';
import { toUpdateTask } from 'src/common/taskUtil';
import { DeleteResult } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) { }

  async getAll(): Promise<Task[]> {
    return await this.tasksRepository.getAll();
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.tasksRepository.save(createTaskDto);
  }

  async find(id: string): Promise<Task | undefined> {
    return await this.tasksRepository.find(id);
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const updatedTask = toUpdateTask(id, updateTaskDto)
    return await this.tasksRepository.update(updatedTask);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.tasksRepository.remove(id);
  }
}
