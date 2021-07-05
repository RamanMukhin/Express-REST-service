import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException, ParseUUIDPipe, UseGuards, UseFilters } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { JwtAuthGuard } from 'src/auth/quards/jwt-auth.guard';
import { AllExceptionsFilter } from 'src/middleware/exception.middleware';

@Controller('boards/:id/tasks')
@UseFilters(AllExceptionsFilter)
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Get()
  async getAll() {
    const tasks = await this.tasksService.getAll();
    return tasks.map((task) => Task.toResponse(task));
  }

  @Post()
  async create(@Param('id') id: string, @Body() createTaskDto: CreateTaskDto) {
    createTaskDto.boardId = id;
    return await this.tasksService.create(createTaskDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    const task = await this.isTask(id);
    return Task.toResponse(task);
  }

  @Put(':id')
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() updateTaskDto: UpdateTaskDto) {
    await this.isTask(id);
    const task = await this.tasksService.update(id, updateTaskDto);
    return Task.toResponse(task);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    await this.isTask(id);
    return await this.tasksService.remove(id);
  }

  async isTask(id: string) {
    const task = await this.tasksService.find(id);
    if (!task) throw new NotFoundException();
    return task;
  }
}










