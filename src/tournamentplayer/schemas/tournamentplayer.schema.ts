import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Tournament } from '../../tournaments/schemas/tournament.schema';
import { Player } from '../../players/schemas/player.schema';

export type TournamentPlayerDocument = TournamentPlayer & Document;

@Schema({ timestamps: true })
export class TournamentPlayer {
  @Prop({ type: 'ObjectId', ref: 'Tournament' })
  tournamentId: Tournament;

  @Prop({ type: 'ObjectId', ref: 'Player' })
  playerId: Player;
}

export const TournamentPlayerSchema =
  SchemaFactory.createForClass(TournamentPlayer);
