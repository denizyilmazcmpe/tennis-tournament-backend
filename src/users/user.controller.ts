import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async registerUser(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    const user = await this.authService.createUser(username, password);
    return { message: 'User registered successfully', user };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const userId = parseInt(id, 10);
    return this.authService.getUserById(userId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const userId = parseInt(id, 10);
    return this.authService.updateUser(userId, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const userId = parseInt(id, 10);
    return this.authService.deleteUser(userId);
  }
}
