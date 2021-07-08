import { PartialType } from '@nestjs/mapped-types';
import { CreateColumnDto } from './create-column.dto';
import { IsUUID, ValidateIf } from 'class-validator';

export class UpdateColumnDto extends PartialType(CreateColumnDto) {
  @ValidateIf((obj) => obj.id !== undefined)
  @IsUUID()
  id?: string;
}
