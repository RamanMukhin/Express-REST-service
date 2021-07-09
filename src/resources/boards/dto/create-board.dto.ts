import { CreateColumnDto } from './create-column.dto';
import { IsString, IsArray } from 'class-validator';
export class CreateBoardDto {
  @IsString()
  title: string;
  @IsArray()
  columns: CreateColumnDto[];
}
