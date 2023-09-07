import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Phase, PhaseSchema } from './schemas/phase.schema';
import { PhaseController } from './phase.controller';
import { PhaseService } from './phase.service';
import { LoggingInterceptor } from 'src/auth/interceptor/logging.interceptor';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Phase.name, schema: PhaseSchema }]),
  ],
  controllers: [PhaseController],
  providers: [PhaseService, LoggingInterceptor, JwtService],
})
export class PhaseModule {}
