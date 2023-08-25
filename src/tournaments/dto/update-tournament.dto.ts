import { IsString, Length } from 'class-validator';

export class UpdateTournamentDto {
  @IsString()
  @Length(2, 250)
  name: string;
}
