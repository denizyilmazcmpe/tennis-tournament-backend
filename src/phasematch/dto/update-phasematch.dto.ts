import { PartialType } from '@nestjs/mapped-types';
import { CreatePhaseMatchDto } from './create-phasematch.dto';

export class UpdatePhaseMatchDto extends PartialType(CreatePhaseMatchDto) {}
