import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Phase } from '../../phases/schemas/phase.schema';
import { Match } from '../../matches/schemas/match.schema';

export type PhaseMatchDocument = PhaseMatch & Document;

@Schema()
export class PhaseMatch {
  @Prop({ type: 'ObjectId', ref: 'Phase' })
  phaseId: Phase;

  @Prop({ type: 'ObjectId', ref: 'Match' })
  matchId: Match;
}

export const PhaseMatchSchema = SchemaFactory.createForClass(PhaseMatch);
