import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { GameFieldService } from './gamefield.service';
import { CreateGameFieldDto } from './dto/create-gamefield.dto';
import { UpdateGameFieldDto } from './dto/update-gamefield.dto';

@Controller('gamefields')
export class GameFieldController {
  constructor(private readonly gameFieldService: GameFieldService) {}

  @Post()
  create(@Body() createGameFieldDto: CreateGameFieldDto) {
    return this.gameFieldService.create(createGameFieldDto);
  }

  @Get()
  findAll() {
    return this.gameFieldService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameFieldService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateGameFieldDto: UpdateGameFieldDto,
  ) {
    return this.gameFieldService.update(id, updateGameFieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameFieldService.remove(id);
  }
}
