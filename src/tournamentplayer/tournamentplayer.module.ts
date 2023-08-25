import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TournamentPlayer,
  TournamentPlayerSchema,
} from './schemas/tournamentplayer.schema';
import { TournamentPlayerController } from './tournamentplayer.controller';
import { TournamentPlayerService } from './tournamentplayer.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TournamentPlayer.name, schema: TournamentPlayerSchema },
    ]),
  ],
  controllers: [TournamentPlayerController],
  providers: [TournamentPlayerService],
})
export class TournamentPlayerModule {}
