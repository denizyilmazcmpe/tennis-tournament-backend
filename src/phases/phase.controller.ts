import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PhaseService } from './phase.service';
import { CreatePhaseDto } from './dto/create-phase.dto';
import { UpdatePhaseDto } from './dto/update-phase.dto';

@Controller('phases')
export class PhaseController {
  constructor(private readonly phaseService: PhaseService) {}

  @Post()
  create(@Body() createPhaseDto: CreatePhaseDto) {
    return this.phaseService.create(createPhaseDto);
  }

  @Get()
  findAll() {
    return this.phaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phaseService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePhaseDto: UpdatePhaseDto) {
    return this.phaseService.update(id, updatePhaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phaseService.remove(id);
  }
}
