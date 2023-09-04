import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GameFieldDocument = GameField & Document;

@Schema({ timestamps: true })
export class GameField {
  @Prop({ required: true })
  name: string;
}

export const GameFieldSchema = SchemaFactory.createForClass(GameField);
