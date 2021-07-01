import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { Board } from './entities/board.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsRepository } from './boards.repository';
import { ColumnsRepository } from './columns.repository';
import { ColumnClass } from './entities/column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board]), TypeOrmModule.forFeature([ColumnClass])],
  controllers: [BoardsController],
  providers: [BoardsService, BoardsRepository, ColumnsRepository]
})
export class BoardsModule {}
