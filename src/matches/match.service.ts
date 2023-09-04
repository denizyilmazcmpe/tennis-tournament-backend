import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Match, MatchDocument } from './schemas/match.schema';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Injectable()
export class MatchService {
  constructor(
    @InjectModel(Match.name)
    private matchModel: Model<MatchDocument>,
  ) {}

  async create(createMatchDto: CreateMatchDto): Promise<Match> {
    const createdMatch = await this.matchModel.create(createMatchDto);
    return createdMatch;
  }

  async findAll(): Promise<Match[]> {
    return await this.matchModel.find();
  }

  async findOne(id: string): Promise<Match> {
    const match = await this.matchModel.findById(id);
    if (!match) {
      throw new NotFoundException('Match not found');
    }
    return match;
  }

  async update(id: string, updateMatchDto: UpdateMatchDto): Promise<Match> {
    const existingMatch = await this.matchModel.findByIdAndUpdate(
      id,
      { $set: updateMatchDto },
      { new: true },
    );
    if (!existingMatch) {
      throw new NotFoundException('Match not found');
    }
    return existingMatch;
  }

  async remove(id: string): Promise<void> {
    const result = await this.matchModel.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      throw new NotFoundException('Match not found');
    }
  }
}
