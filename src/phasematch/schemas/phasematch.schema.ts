import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Phase } from '../../phases/schemas/phase.schema';
import { Match } from '../../matches/schemas/match.schema';

export type PhaseMatchDocument = PhaseMatch & Document;

@Schema()
export class PhaseMatch {
  @Prop({ type: 'ObjectId', ref: 'Phase' }) // Phase modeline referans verilir
  phaseId: Phase;

  @Prop({ type: 'ObjectId', ref: 'Match' }) // Match modeline referans verilir
  matchId: Match;
}

export const PhaseMatchSchema = SchemaFactory.createForClass(PhaseMatch);
