import { IsString, Length } from 'class-validator';

export class CreateTournamentDto {
  @IsString()
  @Length(2, 250)
  name: string;
}
