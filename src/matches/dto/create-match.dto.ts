import { IsArray, IsDate, IsOptional, IsString, Length } from 'class-validator';
import { Player } from '../../players/schemas/player.schema';

export class CreateMatchDto {
  @IsArray()
  @IsString({ each: true })
  players: Player[];

  @IsString()
  @Length(24, 24)
  gameFieldId: string;

  @IsOptional()
  @IsDate()
  matchDate: Date;

  @IsArray()
  @IsString({ each: true })
  scores: string[];
}
