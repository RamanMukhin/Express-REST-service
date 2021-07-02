import { PartialType } from '@nestjs/mapped-types';
import { CreateColumnDto } from './create-column.dto';
import { IsUUID } from 'class-validator';

export class UpdateColumnDto extends PartialType(CreateColumnDto) {
  @IsUUID()
  id?: string;
}
