import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(250)
  @MinLength(2)
  username: string;

  @IsString()
  @MaxLength(250)
  @MinLength(2)
  password: string;
}
