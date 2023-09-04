import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Tournament } from '../../tournaments/schemas/tournament.schema';

export type UserTournamentDocument = UserTournament & Document;

@Schema({ timestamps: true })
export class UserTournament {
  @Prop({ type: 'ObjectId', ref: 'User' })
  userId: User;

  @Prop({ type: 'ObjectId', ref: 'Tournament' })
  tournamentId: Tournament;
}

export const UserTournamentSchema =
  SchemaFactory.createForClass(UserTournament);
