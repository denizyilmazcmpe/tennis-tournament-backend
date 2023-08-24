import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tournament extends Document {
  @Prop({ required: true })
  name: string;
}

export const TournamentSchema = SchemaFactory.createForClass(Tournament);
