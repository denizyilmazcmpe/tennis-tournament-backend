import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Phase, PhaseDocument } from './schemas/phase.schema';
import { CreatePhaseDto } from './dto/create-phase.dto';
import { UpdatePhaseDto } from './dto/update-phase.dto';

@Injectable()
export class PhaseService {
  constructor(
    @InjectModel(Phase.name)
    private phaseModel: Model<PhaseDocument>,
  ) {}

  async create(createPhaseDto: CreatePhaseDto): Promise<Phase> {
    const createdPhase = new this.phaseModel(createPhaseDto);
    return createdPhase.save();
  }

  async findAll(): Promise<Phase[]> {
    return this.phaseModel.find().exec();
  }

  async findOne(id: string): Promise<Phase> {
    const phase = await this.phaseModel.findById(id).exec();
    if (!phase) {
      throw new NotFoundException('Phase not found');
    }
    return phase;
  }

  async update(id: string, updatePhaseDto: UpdatePhaseDto): Promise<Phase> {
    const existingPhase = await this.phaseModel.findByIdAndUpdate(
      id,
      { $set: updatePhaseDto },
      { new: true },
    );
    if (!existingPhase) {
      throw new NotFoundException('Phase not found');
    }
    return existingPhase;
  }

  async remove(id: string): Promise<void> {
    const result = await this.phaseModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Phase not found');
    }
  }
}
