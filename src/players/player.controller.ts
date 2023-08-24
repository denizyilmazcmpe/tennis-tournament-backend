import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './create-player.dto';
import { UpdatePlayerDto } from './update-player.dto';
import { Player } from './player.entity';

@Controller('players')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Post()
  async createPlayer(
    @Body() createPlayerDto: CreatePlayerDto,
  ): Promise<Player> {
    try {
      return this.playerService.createPlayer(createPlayerDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  async getAllPlayers(): Promise<Player[]> {
    try {
      return this.playerService.findAllPlayers();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get(':id')
  async getPlayerById(@Param('id') id: string): Promise<Player> {
    try {
      const player = await this.playerService.findPlayerById(id);
      if (!player) {
        throw new NotFoundException('Player not found');
      }
      return player;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Put(':id')
  async updatePlayer(
    @Param('id') id: string,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ): Promise<Player> {
    try {
      const updatedPlayer = await this.playerService.updatePlayer(
        id,
        updatePlayerDto,
      );
      if (!updatedPlayer) {
        throw new NotFoundException('Player not found');
      }
      return updatedPlayer;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  async deletePlayer(@Param('id') id: string): Promise<Player> {
    try {
      const deletedPlayer = await this.playerService.deletePlayer(id);
      if (!deletedPlayer) {
        throw new NotFoundException('Player not found');
      }
      return deletedPlayer;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
