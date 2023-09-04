import { IsOptional, IsDate, IsArray, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMatchDto } from './create-match.dto';

export class UpdateMatchDto extends PartialType(CreateMatchDto) {
  @IsOptional()
  @IsDate()
  matchDate: Date;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  scores: string[];

  @IsOptional()
  @IsString()
  winnerPlayerId: string;

  @IsOptional()
  @IsString()
  gameFieldId: string;
}
