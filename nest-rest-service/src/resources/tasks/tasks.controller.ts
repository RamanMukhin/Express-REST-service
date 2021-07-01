import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Controller('boards/:id/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Get()
  async getAll() {
    const tasks = await this.tasksService.getAll();
    return tasks.map(Task.toResponse);
  }

  @Post()
  async create(@Param('id') id: string, @Body() createTaskDto: CreateTaskDto) {
    createTaskDto.boardId = id;
    console.log(id);
    const task = await this.tasksService.create(createTaskDto);
    console.log(task);
    return Task.toResponse(task);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.tasksService.find(id);
    return Task.toResponse(task);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    const task = await this.tasksService.update(id, updateTaskDto);
    return Task.toResponse(task);
  }


  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.tasksService.remove(id);
  }

}










