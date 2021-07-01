import { CreateBoardDto } from 'src/resources/boards/dto/create-board.dto.js';
import { CreateColumnDto } from 'src/resources/boards/dto/create-column.dto';
import { UpdateBoardDto } from 'src/resources/boards/dto/update-board.dto';
import { ColumnClass } from 'src/resources/boards/entities/column.entity';

const toBoardDto = (createBoardDto: CreateBoardDto): string => createBoardDto.title;

const toColumnDto = (createBoardDto: CreateBoardDto): CreateColumnDto[] => createBoardDto.columns;

const toUpdateColumnDto = (updateBoardDto: UpdateBoardDto) => updateBoardDto.columns;

const toBoard = (title: string, columns: ColumnClass[]): CreateBoardDto  => Object({ title, columns });

const toUdateBoard = (id: string, title: string)=> Object({ id, title });

export { toBoardDto, toColumnDto, toBoard, toUdateBoard, toUpdateColumnDto };
