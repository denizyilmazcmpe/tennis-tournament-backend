import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PhaseMatchService } from './phasematch.service';
import { CreatePhaseMatchDto } from './dto/create-phasematch.dto';
import { UpdatePhaseMatchDto } from './dto/update-phasematch.dto';

@Controller('phasematches')
export class PhaseMatchController {
  constructor(private readonly phaseMatchService: PhaseMatchService) {}

  @Post()
  create(@Body() createPhaseMatchDto: CreatePhaseMatchDto) {
    return this.phaseMatchService.create(createPhaseMatchDto);
  }

  @Get()
  findAll() {
    return this.phaseMatchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phaseMatchService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhaseMatchDto: UpdatePhaseMatchDto,
  ) {
    return this.phaseMatchService.update(id, updatePhaseMatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phaseMatchService.remove(id);
  }
}
