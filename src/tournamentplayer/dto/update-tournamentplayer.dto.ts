import { PartialType } from '@nestjs/mapped-types';
import { CreateTournamentPlayerDto } from './create-tournamentplayer.dto';

export class UpdateTournamentPlayerDto extends PartialType(
  CreateTournamentPlayerDto,
) {}
