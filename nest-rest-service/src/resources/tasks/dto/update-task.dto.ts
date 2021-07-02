import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsUUID } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsUUID()
  id?: string;
}
