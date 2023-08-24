import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './create-match.dto';
import { Match } from './match.entity';

@Controller('matches')
export class MatchController {
  constructor(private matchService: MatchService) {}

  @Post()
  async createMatch(@Body() createMatchDto: CreateMatchDto): Promise<Match> {
    return this.matchService.createMatch(createMatchDto);
  }

  @Get()
  async getAllMatches(): Promise<Match[]> {
    return this.matchService.findAllMatches();
  }

  @Get(':id')
  async getMatchById(@Param('id') id: string): Promise<Match> {
    return this.matchService.findMatchById(id);
  }

  @Put(':id')
  async updateMatch(
    @Param('id') id: string,
    @Body() updateMatchDto: CreateMatchDto,
  ): Promise<Match> {
    return this.matchService.updateMatch(id, updateMatchDto);
  }

  @Delete(':id')
  async deleteMatch(@Param('id') id: string): Promise<Match> {
    return this.matchService.deleteMatch(id);
  }
}
