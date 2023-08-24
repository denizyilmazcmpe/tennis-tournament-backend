import { IsNotEmpty } from 'class-validator';

export class CreatePlayerDto {
  @IsNotEmpty()
  fullName: string;
}
