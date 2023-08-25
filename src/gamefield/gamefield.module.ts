import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameField, GameFieldSchema } from './schemas/gamefield.schema';
import { GameFieldController } from './gamefield.controller';
import { GameFieldService } from './gamefield.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GameField.name, schema: GameFieldSchema },
    ]),
  ],
  controllers: [GameFieldController],
  providers: [GameFieldService],
})
export class GameFieldModule {}
