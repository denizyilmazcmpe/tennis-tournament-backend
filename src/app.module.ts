import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerModule } from './players/player.module';
import { MatchModule } from './matches/match.module';
import { TournamentModule } from './tournaments/tournament.module'; // Oluşturduğunuz modül yolu
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/tennis-tournament'),
    PlayerModule,
    MatchModule,
    TournamentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
