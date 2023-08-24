import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TournamentController } from './tournament.controller';
import { TournamentService } from './tournament.service';
import { TournamentModel, TournamentSchema } from './tournament.entity'; // Schema'yı doğrudan import edin

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Tournament', schema: TournamentSchema },
    ]),
  ],
  controllers: [TournamentController],
  providers: [TournamentService, TournamentModel],
})
export class TournamentModule {}
