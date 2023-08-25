import { IsString } from 'class-validator';

export class CreatePhaseDto {
  @IsString()
  name: string;
}
