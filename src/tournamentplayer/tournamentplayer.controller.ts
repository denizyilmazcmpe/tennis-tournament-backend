import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { TournamentPlayerService } from './tournamentplayer.service';
import { CreateTournamentPlayerDto } from './dto/create-tournamentplayer.dto';
import { UpdateTournamentPlayerDto } from './dto/update-tournamentplayer.dto';

@Controller('tournamentplayers')
export class TournamentPlayerController {
  constructor(
    private readonly tournamentPlayerService: TournamentPlayerService,
  ) {}

  @Post()
  create(@Body() createTournamentPlayerDto: CreateTournamentPlayerDto) {
    return this.tournamentPlayerService.create(createTournamentPlayerDto);
  }

  @Get()
  findAll() {
    return this.tournamentPlayerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tournamentPlayerService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTournamentPlayerDto: UpdateTournamentPlayerDto,
  ) {
    return this.tournamentPlayerService.update(id, updateTournamentPlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tournamentPlayerService.remove(id);
  }
}
