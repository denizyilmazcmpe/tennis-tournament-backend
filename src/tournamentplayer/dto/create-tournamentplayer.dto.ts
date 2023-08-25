import { IsString } from 'class-validator';
import { Tournament } from '../../tournaments/schemas/tournament.schema';
import { Player } from '../../players/schemas/player.schema';

export class CreateTournamentPlayerDto {
  @IsString()
  tournamentId: Tournament;

  @IsString()
  playerId: Player;
}
