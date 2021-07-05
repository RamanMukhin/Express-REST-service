import { Controller, Get, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { AllExceptionsFilter } from './middleware/exception.middleware';

@UseFilters(AllExceptionsFilter)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
