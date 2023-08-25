import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserTournament,
  UserTournamentSchema,
} from './schemas/usertournament.schema';
import { UserTournamentController } from './usertournament.controller';
import { UserTournamentService } from './usertournament.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserTournament.name, schema: UserTournamentSchema },
    ]),
  ],
  controllers: [UserTournamentController],
  providers: [UserTournamentService],
})
export class UserTournamentModule {}
