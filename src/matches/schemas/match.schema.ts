import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Player } from '../../players/schemas/player.schema';
import { GameField } from '../../gamefield/schemas/gamefield.schema';

export type MatchDocument = Match & Document;

@Schema({ timestamps: true })
export class Match {
  @Prop({ type: [{ type: 'ObjectId', ref: 'Player' }] })
  players: Player[];

  @Prop({ type: 'ObjectId', ref: 'GameField' })
  gameFieldId: GameField;

  @Prop({ type: Date })
  matchDate: Date;

  @Prop({ type: [String] })
  scores: string[];

  @Prop({ type: 'ObjectId', ref: 'Player' })
  winnerPlayerId: Player;
}

export const MatchSchema = SchemaFactory.createForClass(Match);
