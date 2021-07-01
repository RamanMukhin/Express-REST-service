import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) { }

  @Get()
  async getAll() {
    return await this.boardsService.getAll();
  }

  @Post()
  async create(@Body() createBoardDto: CreateBoardDto) {
    return await this.boardsService.create(createBoardDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.isBoard(id);;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    await this.isBoard(id);
    return await this.boardsService.update(id, updateBoardDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.isBoard(id);
    return await this.boardsService.remove(id);
  }

  async isBoard(id: string) {
    const board = await this.boardsService.find(id);
    if (!board) throw new NotFoundException();
    return board;
  }
}
