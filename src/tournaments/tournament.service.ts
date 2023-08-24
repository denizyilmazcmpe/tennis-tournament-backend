import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tournament } from './tournament.entity';
import { CreateTournamentDto } from './create-tournament.dto';

@Injectable()
export class TournamentService {
  constructor(
    @InjectModel('Tournament')
    private readonly tournamentModel: Model<Tournament>,
  ) {}

  async createTournament(
    createTournamentDto: CreateTournamentDto,
  ): Promise<Tournament> {
    const createdTournament = new this.tournamentModel(createTournamentDto);
    return createdTournament.save();
  }

  async getAllTournaments(): Promise<Tournament[]> {
    return this.tournamentModel.find().exec();
  }

  async getTournamentById(id: string): Promise<Tournament> {
    return this.tournamentModel.findById(id).exec();
  }

  async updateTournament(
    id: string,
    updateTournamentDto: CreateTournamentDto,
  ): Promise<Tournament> {
    return this.tournamentModel
      .findByIdAndUpdate(id, updateTournamentDto, { new: true })
      .exec();
  }

  async deleteTournament(id: string): Promise<Tournament> {
    return this.tournamentModel.findByIdAndRemove(id).exec();
  }
}
