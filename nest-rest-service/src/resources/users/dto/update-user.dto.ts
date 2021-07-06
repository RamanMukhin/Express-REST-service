import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

import { IsUUID, ValidateIf } from 'class-validator';
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ValidateIf((obj) => obj.id !== undefined)
  @IsUUID()
  id?: string;
}
