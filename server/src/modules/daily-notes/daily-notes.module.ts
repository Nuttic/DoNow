import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyNote } from '../../db/entities/daily-note.entity';
import { DailyNotesService } from './daily-notes.service';
import { DailyNotesController } from './daily-notes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DailyNote])],
  controllers: [DailyNotesController],
  providers: [DailyNotesService],
  exports: [DailyNotesService],
})
export class DailyNotesModule {}
