import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerModule } from './players/player.module';
import { MatchModule } from './matches/match.module';
import { TournamentModule } from './tournaments/tournament.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhaseModule } from './phases/phase.module';
import { GameFieldModule } from './gamefield/gamefield.module';
import { PhaseMatchModule } from './phasematch/phasematch.module';
import { UsersModule } from './users/users.module';
import { UserTournamentModule } from './usertournament/usertournament.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/tennis-tournament'),
    PlayerModule,
    MatchModule,
    TournamentModule,
    PhaseModule,
    GameFieldModule,
    PhaseMatchModule,
    UsersModule,
    UserTournamentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
