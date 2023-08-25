import { PartialType } from '@nestjs/mapped-types';
import { CreateGameFieldDto } from './create-gamefield.dto';

export class UpdateGameFieldDto extends PartialType(CreateGameFieldDto) {}
