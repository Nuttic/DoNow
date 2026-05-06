import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitSchedule } from '../../db/entities/habit-schedule.entity';
import { HabitSchedulesService } from './habit-schedules.service';
import { HabitSchedulesController } from './habit-schedules.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HabitSchedule])],
  controllers: [HabitSchedulesController],
  providers: [HabitSchedulesService],
  exports: [HabitSchedulesService],
})
export class HabitSchedulesModule {}
