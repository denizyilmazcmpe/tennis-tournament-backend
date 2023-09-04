import { IsString, Length } from 'class-validator';
import { Tournament } from '../../tournaments/schemas/tournament.schema';
import { Player } from '../../players/schemas/player.schema';

export class CreateTournamentPlayerDto {
  @IsString()
  @Length(24, 24)
  tournamentId: Tournament;

  @IsString()
  @Length(24, 24)
  playerId: Player;
}
