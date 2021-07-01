import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { ColumnClass } from './entities/column.entity';


@Injectable()
export class ColumnsRepository {
  constructor(
    @InjectRepository(ColumnClass)
    private columnsRepository: Repository<ColumnClass>,
  ) { }


  async saveColumns(createColumnsDto: CreateColumnDto[]): Promise<ColumnClass[]>{
    return await Promise.all(createColumnsDto.map((column) => this.columnsRepository.save(column)));
  }
 
  async updateColumns(updateColumnsDto: UpdateColumnDto[]) {
    return await this.columnsRepository.save(updateColumnsDto);
  }
}
