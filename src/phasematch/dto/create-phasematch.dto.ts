import { IsString, Length } from 'class-validator';
import { Phase } from '../../phases/schemas/phase.schema';
import { Match } from '../../matches/schemas/match.schema';

export class CreatePhaseMatchDto {
  @IsString()
  @Length(24, 24)
  phaseId: Phase;

  @IsString()
  @Length(24, 24)
  matchId: Match;
}
