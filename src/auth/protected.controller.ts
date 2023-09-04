import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';

@Controller('protected')
export class ProtectedController {
  @Get()
  @UseGuards(JwtAuthGuard)
  getProtectedData() {
    return 'This data is protected by JWT authentication';
  }
}
