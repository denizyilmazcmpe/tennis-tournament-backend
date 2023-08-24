import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MatchDocument = Match & Document;

@Schema()
export class Match {
  @Prop({ required: true })
  player1: string;

  @Prop({ required: true })
  player2: string;

  @Prop({ required: true })
  winner: string;

  // Diğer özellikler ve metotlar eklenebilir.
}

export const MatchSchema = SchemaFactory.createForClass(Match);
