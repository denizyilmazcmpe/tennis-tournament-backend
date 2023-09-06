import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller('cats')
export class CatsController {
  @Get()
  getExample(): string {
    return 'Example data';
  }
}
