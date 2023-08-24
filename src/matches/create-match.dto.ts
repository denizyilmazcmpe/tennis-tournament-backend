import { IsNotEmpty } from 'class-validator';

export class CreateMatchDto {
  @IsNotEmpty()
  player1: string;

  @IsNotEmpty()
  player2: string;

  @IsNotEmpty()
  winner: string;
}
