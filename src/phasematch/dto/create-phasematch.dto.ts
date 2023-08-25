import { IsString } from 'class-validator';
import { Phase } from '../../phases/schemas/phase.schema';
import { Match } from '../../matches/schemas/match.schema';

export class CreatePhaseMatchDto {
  @IsString()
  phaseId: Phase;

  @IsString()
  matchId: Match;
}
