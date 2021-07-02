import { PartialType } from '@nestjs/mapped-types';
import { CreateBoardDto } from './create-board.dto';
import { IsUUID } from 'class-validator';

export class UpdateBoardDto extends PartialType(CreateBoardDto) {
  @IsUUID()
  id?: string;
}
