import { Injectable } from '@nestjs/common';
import {
  toBoard,
  toBoardDto,
  toColumnDto,
  toUdateBoard,
  toUpdateColumnDto,
} from 'src/common/boardUtil';
import { DeleteResult } from 'typeorm';
import { BoardsRepository } from './boards.repository';
import { ColumnsRepository } from './columns.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardsService {
  constructor(
    private readonly boardsRepository: BoardsRepository,
    private readonly columnsRepository: ColumnsRepository,
  ) {}

  async getAll(): Promise<Board[]> {
    return await this.boardsRepository.getAll();
  }

  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    const createColumnsDto = toColumnDto(createBoardDto);
    const createdColumns = await this.columnsRepository.saveColumns(
      createColumnsDto,
    );
    const title = toBoardDto(createBoardDto);
    const boardDto = toBoard(title, createdColumns);
    return await this.boardsRepository.save(boardDto);
  }

  async find(id: string): Promise<Board> {
    return await this.boardsRepository.find(id);
  }

  async update(id: string, updateBoardDto: UpdateBoardDto): Promise<Board> {
    const columns = toUpdateColumnDto(updateBoardDto);
    await this.columnsRepository.updateColumns(columns);
    const board = toUdateBoard(id, updateBoardDto.title);
    return await this.boardsRepository.update(board);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.boardsRepository.remove(id);
  }
}
