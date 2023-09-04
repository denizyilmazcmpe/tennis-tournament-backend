import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PhaseDocument = Phase & Document;

@Schema({ timestamps: true })
export class Phase {
  @Prop({ required: true })
  name: string;
}

export const PhaseSchema = SchemaFactory.createForClass(Phase);
