import { IsString } from 'class-validator';
import { User } from '../../users/schemas/user.schema';
import { Tournament } from '../../tournaments/schemas/tournament.schema';

export class CreateUserTournamentDto {
  @IsString()
  userId: User;

  @IsString()
  tournamentId: Tournament;
}
