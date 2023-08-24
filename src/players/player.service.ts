import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player, PlayerDocument } from './player.entity';
import { CreatePlayerDto } from './create-player.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel(Player.name) private playerModel: Model<PlayerDocument>,
  ) {}

  async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const createdPlayer = new this.playerModel(createPlayerDto);
    return createdPlayer.save();
  }

  async findAllPlayers(): Promise<Player[]> {
    return this.playerModel.find().exec();
  }

  async findPlayerById(id: string): Promise<Player> {
    return this.playerModel.findById(id).exec();
  }

  async updatePlayer(
    id: string,
    updatePlayerDto: CreatePlayerDto,
  ): Promise<Player> {
    return this.playerModel
      .findByIdAndUpdate(id, updatePlayerDto, { new: true })
      .exec();
  }

  async deletePlayer(id: string): Promise<Player> {
    return this.playerModel.findByIdAndDelete(id).exec();
  }
}
