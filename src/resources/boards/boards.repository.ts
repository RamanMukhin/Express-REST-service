import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardsRepository {
  constructor(
    @InjectRepository(Board)
    private boardsRepository: Repository<Board>,
  ) {}

  async getAll(): Promise<Board[]> {
    return await this.boardsRepository.find();
  }

  async save(createBoardDto: CreateBoardDto): Promise<Board> {
    return await this.boardsRepository.save(createBoardDto);
  }

  async find(id: string): Promise<Board | undefined> {
    return await this.boardsRepository.findOne(id);
  }

  async update(updateBoardDto: UpdateBoardDto): Promise<Board> {
    return await this.boardsRepository.save(updateBoardDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.boardsRepository.delete(id);
  }
}
