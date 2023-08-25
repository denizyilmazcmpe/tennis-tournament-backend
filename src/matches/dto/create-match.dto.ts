import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';
import { Player } from '../../players/schemas/player.schema';

export class CreateMatchDto {
  @IsArray()
  players: Player[];

  @IsString()
  gameFieldId: string;

  @IsOptional()
  @IsDate()
  matchDate: Date;

  @IsArray()
  @IsString({ each: true })
  scores: string[];
}
