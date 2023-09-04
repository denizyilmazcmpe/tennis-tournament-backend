import { IsString, Length } from 'class-validator';
import { User } from '../../users/schemas/user.schema';
import { Tournament } from '../../tournaments/schemas/tournament.schema';

export class CreateUserTournamentDto {
  @IsString()
  @Length(24, 24)
  userId: User;

  @IsString()
  @Length(24, 24)
  tournamentId: Tournament;
}
