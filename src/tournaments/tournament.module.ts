import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tournament, TournamentSchema } from './schemas/tournament.schema';
import { TournamentController } from './tournament.controller';
import { TournamentService } from './tournament.service';
import { LoggingInterceptor } from 'src/auth/interceptor/logging.interceptor';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Tournament.name, schema: TournamentSchema },
    ]),
  ],
  controllers: [TournamentController],
  providers: [TournamentService, LoggingInterceptor, JwtService],
})
export class TournamentModule {}
