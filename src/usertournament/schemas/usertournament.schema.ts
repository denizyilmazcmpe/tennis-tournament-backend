import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Tournament } from '../../tournaments/schemas/tournament.schema';

export type UserTournamentDocument = UserTournament & Document;

@Schema()
export class UserTournament {
  @Prop({ type: 'ObjectId', ref: 'User' }) // User modeline referans verilir
  userId: User;

  @Prop({ type: 'ObjectId', ref: 'Tournament' }) // Tournament modeline referans verilir
  tournamentId: Tournament;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const UserTournamentSchema =
  SchemaFactory.createForClass(UserTournament);