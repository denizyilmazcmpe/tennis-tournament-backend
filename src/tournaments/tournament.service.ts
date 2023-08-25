import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tournament, TournamentDocument } from './schemas/tournament.schema';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';

@Injectable()
export class TournamentService {
  constructor(
    @InjectModel(Tournament.name)
    private tournamentModel: Model<TournamentDocument>,
  ) {}

  async create(createTournamentDto: CreateTournamentDto): Promise<Tournament> {
    const createdTournament = new this.tournamentModel(createTournamentDto);
    return createdTournament.save();
  }

  async findAll(): Promise<Tournament[]> {
    return this.tournamentModel.find().exec();
  }

  async findOne(id: string): Promise<Tournament> {
    const tournament = await this.tournamentModel.findById(id).exec();
    if (!tournament) {
      throw new NotFoundException('Tournament not found');
    }
    return tournament;
  }

  async update(
    id: string,
    updateTournamentDto: UpdateTournamentDto,
  ): Promise<Tournament> {
    const existingTournament = await this.tournamentModel.findByIdAndUpdate(
      id,
      { $set: updateTournamentDto },
      { new: true },
    );
    if (!existingTournament) {
      throw new NotFoundException('Tournament not found');
    }
    return existingTournament;
  }

  async remove(id: string): Promise<void> {
    const result = await this.tournamentModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Tournament not found');
    }
  }
}
