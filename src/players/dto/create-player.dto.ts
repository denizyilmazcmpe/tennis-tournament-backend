import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  @MaxLength(250)
  @MinLength(2)
  name: string;
}
