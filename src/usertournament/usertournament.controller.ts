import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserTournamentService } from './usertournament.service';
import { CreateUserTournamentDto } from './dto/create-usertournament.dto';
import { UpdateUserTournamentDto } from './dto/update-usertournament.dto';

@Controller('usertournaments')
export class UserTournamentController {
  constructor(private readonly userTournamentService: UserTournamentService) {}

  @Post()
  create(@Body() createUserTournamentDto: CreateUserTournamentDto) {
    return this.userTournamentService.create(createUserTournamentDto);
  }

  @Get()
  findAll() {
    return this.userTournamentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTournamentService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserTournamentDto: UpdateUserTournamentDto,
  ) {
    return this.userTournamentService.update(id, updateUserTournamentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTournamentService.remove(id);
  }
}
