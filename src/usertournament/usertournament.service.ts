import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  UserTournament,
  UserTournamentDocument,
} from './schemas/usertournament.schema';
import { CreateUserTournamentDto } from './dto/create-usertournament.dto';
import { UpdateUserTournamentDto } from './dto/update-usertournament.dto';

@Injectable()
export class UserTournamentService {
  constructor(
    @InjectModel(UserTournament.name)
    private userTournamentModel: Model<UserTournamentDocument>,
  ) {}

  async create(
    createUserTournamentDto: CreateUserTournamentDto,
  ): Promise<UserTournament> {
    const createdUserTournament = new this.userTournamentModel(
      createUserTournamentDto,
    );
    return createdUserTournament.save();
  }

  async findAll(): Promise<UserTournament[]> {
    return this.userTournamentModel.find().exec();
  }

  async findOne(id: string): Promise<UserTournament> {
    const userTournament = await this.userTournamentModel.findById(id).exec();
    if (!userTournament) {
      throw new NotFoundException('UserTournament not found');
    }
    return userTournament;
  }

  async update(
    id: string,
    updateUserTournamentDto: UpdateUserTournamentDto,
  ): Promise<UserTournament> {
    const existingUserTournament =
      await this.userTournamentModel.findByIdAndUpdate(
        id,
        { $set: updateUserTournamentDto },
        { new: true },
      );
    if (!existingUserTournament) {
      throw new NotFoundException('UserTournament not found');
    }
    return existingUserTournament;
  }

  async remove(id: string): Promise<void> {
    const result = await this.userTournamentModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('UserTournament not found');
    }
  }
}
