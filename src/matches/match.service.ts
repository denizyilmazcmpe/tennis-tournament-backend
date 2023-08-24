import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Match, MatchDocument } from './match.entity';
import { CreateMatchDto } from './create-match.dto';

@Injectable()
export class MatchService {
  constructor(
    @InjectModel(Match.name) private matchModel: Model<MatchDocument>,
  ) {}

  async createMatch(createMatchDto: CreateMatchDto): Promise<Match> {
    const createdMatch = new this.matchModel(createMatchDto);
    return createdMatch.save();
  }

  async findAllMatches(): Promise<Match[]> {
    return this.matchModel.find().exec();
  }

  async findMatchById(id: string): Promise<Match> {
    return this.matchModel.findById(id).exec();
  }

  async updateMatch(
    id: string,
    updateMatchDto: CreateMatchDto,
  ): Promise<Match> {
    return this.matchModel
      .findByIdAndUpdate(id, updateMatchDto, { new: true })
      .exec();
  }

  async deleteMatch(id: string): Promise<Match> {
    return this.matchModel.findByIdAndDelete(id).exec();
  }
}
