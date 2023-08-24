import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Player } from '../players/player.schema';
import { Tournament } from '../tournaments/tournament.schema';

@Schema()
export class Match extends Document {
  @Prop({ type: Player, required: true })
  player1: Player;

  @Prop({ type: Player, required: true })
  player2: Player;

  @Prop({ type: Tournament, required: true })
  tournament: Tournament;

  @Prop({ type: Player, required: true })
  winner: Player;

  // Diğer alanlar...
}

export const MatchSchema = SchemaFactory.createForClass(Match);
