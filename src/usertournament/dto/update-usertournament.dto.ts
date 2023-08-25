import { PartialType } from '@nestjs/mapped-types';
import { CreateUserTournamentDto } from './create-usertournament.dto';

export class UpdateUserTournamentDto extends PartialType(
  CreateUserTournamentDto,
) {}
