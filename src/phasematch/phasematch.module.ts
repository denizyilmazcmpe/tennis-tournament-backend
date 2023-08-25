import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhaseMatch, PhaseMatchSchema } from './schemas/phasematch.schema';
import { PhaseMatchController } from './phasematch.controller';
import { PhaseMatchService } from './phasematch.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PhaseMatch.name, schema: PhaseMatchSchema },
    ]),
  ],
  controllers: [PhaseMatchController],
  providers: [PhaseMatchService],
})
export class PhaseMatchModule {}
