import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  TournamentPlayer,
  TournamentPlayerDocument,
} from './schemas/tournamentplayer.schema';
import { CreateTournamentPlayerDto } from './dto/create-tournamentplayer.dto';
import { UpdateTournamentPlayerDto } from './dto/update-tournamentplayer.dto';

@Injectable()
export class TournamentPlayerService {
  constructor(
    @InjectModel(TournamentPlayer.name)
    private tournamentPlayerModel: Model<TournamentPlayerDocument>,
  ) {}

  async create(
    createTournamentPlayerDto: CreateTournamentPlayerDto,
  ): Promise<TournamentPlayer> {
    const createdTournamentPlayer = await this.tournamentPlayerModel.create(
      createTournamentPlayerDto,
    );
    return createdTournamentPlayer;
  }

  async findAll(): Promise<TournamentPlayer[]> {
    return await this.tournamentPlayerModel.find();
  }

  async findOne(id: string): Promise<TournamentPlayer> {
    const tournamentPlayer = await this.tournamentPlayerModel.findById(id);
    if (!tournamentPlayer) {
      throw new NotFoundException('TournamentPlayer not found');
    }
    return tournamentPlayer;
  }

  async update(
    id: string,
    updateTournamentPlayerDto: UpdateTournamentPlayerDto,
  ): Promise<TournamentPlayer> {
    const existingTournamentPlayer =
      await this.tournamentPlayerModel.findByIdAndUpdate(
        id,
        { $set: updateTournamentPlayerDto },
        { new: true },
      );
    if (!existingTournamentPlayer) {
      throw new NotFoundException('TournamentPlayer not found');
    }
    return existingTournamentPlayer;
  }

  async remove(id: string): Promise<void> {
    const result = await this.tournamentPlayerModel.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      throw new NotFoundException('TournamentPlayer not found');
    }
  }
}
