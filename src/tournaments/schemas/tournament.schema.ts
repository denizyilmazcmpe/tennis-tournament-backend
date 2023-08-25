import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Phase } from 'src/phases/schemas/phase.schema';

export type TournamentDocument = Tournament & Document;

@Schema()
export class Tournament {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;

  @Prop({ type: [{ type: 'ObjectId', ref: 'Phase' }] })
  phases: Phase[];
}

export const TournamentSchema = SchemaFactory.createForClass(Tournament);
