import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PhaseMatch, PhaseMatchDocument } from './schemas/phasematch.schema';
import { CreatePhaseMatchDto } from './dto/create-phasematch.dto';
import { UpdatePhaseMatchDto } from './dto/update-phasematch.dto';

@Injectable()
export class PhaseMatchService {
  constructor(
    @InjectModel(PhaseMatch.name)
    private phaseMatchModel: Model<PhaseMatchDocument>,
  ) {}

  async create(createPhaseMatchDto: CreatePhaseMatchDto): Promise<PhaseMatch> {
    const createdPhaseMatch = new this.phaseMatchModel(createPhaseMatchDto);
    return createdPhaseMatch.save();
  }

  async findAll(): Promise<PhaseMatch[]> {
    return this.phaseMatchModel.find().exec();
  }

  async findOne(id: string): Promise<PhaseMatch> {
    const phaseMatch = await this.phaseMatchModel.findById(id).exec();
    if (!phaseMatch) {
      throw new NotFoundException('PhaseMatch not found');
    }
    return phaseMatch;
  }

  async update(
    id: string,
    updatePhaseMatchDto: UpdatePhaseMatchDto,
  ): Promise<PhaseMatch> {
    const existingPhaseMatch = await this.phaseMatchModel.findByIdAndUpdate(
      id,
      { $set: updatePhaseMatchDto },
      { new: true },
    );
    if (!existingPhaseMatch) {
      throw new NotFoundException('PhaseMatch not found');
    }
    return existingPhaseMatch;
  }

  async remove(id: string): Promise<void> {
    const result = await this.phaseMatchModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('PhaseMatch not found');
    }
  }
}
