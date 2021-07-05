import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException, ParseUUIDPipe, UseGuards, UseFilters } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/quards/jwt-auth.guard';
import { AllExceptionsFilter } from 'src/middleware/exception.middleware';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
@UseFilters(AllExceptionsFilter)
@UseGuards(JwtAuthGuard)
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
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.isBoard(id);;
  }

  @Put(':id')
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() updateBoardDto: UpdateBoardDto) {
    await this.isBoard(id);
    return await this.boardsService.update(id, updateBoardDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    await this.isBoard(id);
    return await this.boardsService.remove(id);
  }

  async isBoard(id: string) {
    const board = await this.boardsService.find(id);
    if (!board) throw new NotFoundException();
    return board;
  }
}
