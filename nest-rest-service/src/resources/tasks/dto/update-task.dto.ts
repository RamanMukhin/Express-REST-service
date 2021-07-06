import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsUUID, ValidateIf } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ValidateIf((obj) => obj.id !== undefined)
  @IsUUID()
  id?: string;
}
