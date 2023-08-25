import { IsString } from 'class-validator';

export class CreateGameFieldDto {
  @IsString()
  name: string;
}
