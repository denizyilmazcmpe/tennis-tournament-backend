import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Player } from '../../players/schemas/player.schema';
import { GameField } from '../../gamefield/schemas/gamefield.schema';

export type MatchDocument = Match & Document;

@Schema()
export class Match {
  @Prop({ type: [{ type: 'ObjectId', ref: 'Player' }] }) // Player modeline referans verilir
  players: Player[];

  @Prop({ type: 'ObjectId', ref: 'GameField' }) // GameField modeline referans verilir
  gameFieldId: GameField;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;

  @Prop({ type: Date })
  matchDate: Date;

  @Prop({ type: [String] }) // Scores array'i
  scores: string[];

  @Prop({ type: 'ObjectId', ref: 'Player' }) // Winner oyuncusu için referans
  winnerPlayerId: Player;
}

export const MatchSchema = SchemaFactory.createForClass(Match);
