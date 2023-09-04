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
import { TournamentPlayerModule } from './tournamentplayer/tournamentplayer.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthService } from './auth/jwt/jwt.service';
import { JwtStrategy } from './auth/jwt/jwt.strategy';
import { jwtConfig } from './auth/jwt/jwt.config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './auth/interceptor';

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
    TournamentPlayerModule,
    PassportModule,
    JwtModule.register(jwtConfig),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtAuthService,
    JwtStrategy,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  exports: [JwtModule],
})
export class AppModule {}
