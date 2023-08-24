import { IsNotEmpty } from 'class-validator';

export class UpdatePlayerDto {
  @IsNotEmpty()
  fullName: string;
}
