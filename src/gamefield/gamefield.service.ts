import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GameField, GameFieldDocument } from './schemas/gamefield.schema';
import { CreateGameFieldDto } from './dto/create-gamefield.dto';
import { UpdateGameFieldDto } from './dto/update-gamefield.dto';

@Injectable()
export class GameFieldService {
  constructor(
    @InjectModel(GameField.name)
    private gameFieldModel: Model<GameFieldDocument>,
  ) {}

  async create(createGameFieldDto: CreateGameFieldDto): Promise<GameField> {
    const createdGameField =
      await this.gameFieldModel.create(createGameFieldDto);
    return createdGameField;
  }

  async findAll(): Promise<GameField[]> {
    return await this.gameFieldModel.find();
  }

  async findOne(id: string): Promise<GameField> {
    const gameField = await this.gameFieldModel.findById(id);
    if (!gameField) {
      throw new NotFoundException('GameField not found');
    }
    return gameField;
  }

  async update(
    id: string,
    updateGameFieldDto: UpdateGameFieldDto,
  ): Promise<GameField> {
    const existingGameField = await this.gameFieldModel.findByIdAndUpdate(
      id,
      { $set: updateGameFieldDto },
      { new: true },
    );
    if (!existingGameField) {
      throw new NotFoundException('GameField not found');
    }
    return existingGameField;
  }

  async remove(id: string): Promise<void> {
    const result = await this.gameFieldModel.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      throw new NotFoundException('GameField not found');
    }
  }
}
