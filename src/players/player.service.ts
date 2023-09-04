import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player, PlayerDocument } from './schemas/player.schema';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel(Player.name)
    private playerModel: Model<PlayerDocument>,
  ) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const createdPlayer = await this.playerModel.create(createPlayerDto);
    return createdPlayer;
  }

  async findAll(): Promise<Player[]> {
    return await this.playerModel.find();
  }

  async findOne(id: string): Promise<Player> {
    const player = await this.playerModel.findById(id);
    if (!player) {
      throw new NotFoundException('Player not found');
    }
    return player;
  }

  async update(id: string, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    const existingPlayer = await this.playerModel.findByIdAndUpdate(
      id,
      { $set: updatePlayerDto },
      { new: true },
    );
    if (!existingPlayer) {
      throw new NotFoundException('Player not found');
    }
    return existingPlayer;
  }

  async remove(id: string): Promise<void> {
    const result = await this.playerModel.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      throw new NotFoundException('Player not found');
    }
  }
}
