import mongoose, { Schema, Document } from 'mongoose';

export interface Tournament extends Document {
  name: any;
  // Diğer alanlar...
}

export const TournamentSchema = new Schema({
  name: { type: String, required: true },
  // Diğer alanlar...
});

export const TournamentModel = mongoose.model<Tournament>(
  'Tournament',
  TournamentSchema,
);
