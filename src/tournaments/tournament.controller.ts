import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './create-tournament.dto';
import { Tournament } from './tournament.entity';

@Controller('tournaments')
export class TournamentController {
  constructor(private tournamentService: TournamentService) {}

  @Post()
  async createTournament(
    @Body() createTournamentDto: CreateTournamentDto,
  ): Promise<Tournament> {
    return this.tournamentService.createTournament(createTournamentDto);
  }

  @Get()
  async getAllTournaments(): Promise<Tournament[]> {
    return this.tournamentService.getAllTournaments();
  }

  @Get(':id')
  async getTournamentById(@Param('id') id: string): Promise<Tournament> {
    return this.tournamentService.getTournamentById(id);
  }

  @Put(':id')
  async updateTournament(
    @Param('id') id: string,
    @Body() updateTournamentDto: CreateTournamentDto,
  ): Promise<Tournament> {
    return this.tournamentService.updateTournament(id, updateTournamentDto);
  }

  @Delete(':id')
  async deleteTournament(@Param('id') id: string): Promise<Tournament> {
    return this.tournamentService.deleteTournament(id);
  }
}
