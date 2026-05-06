import { IsNumber, IsOptional, IsString, IsArray, IsEnum, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateHabitScheduleDto } from './create-habit-schedule.dto';
import { Type, WeekDays } from '../../../db/entities/habit-schedule.entity';

export class UpdateHabitScheduleDto extends PartialType(CreateHabitScheduleDto) {
  @ApiPropertyOptional({ description: 'Habit ID', example: 1 })
  @IsOptional()
  @IsNumber()
  habit_id?: number;

  @ApiPropertyOptional({ description: 'Schedule type', enum: Type, example: Type.WEEKLY })
  @IsOptional()
  @IsEnum(Type)
  type?: string;

  @ApiPropertyOptional({ description: 'Days of week', enum: WeekDays, isArray: true })
  @IsOptional()
  @IsArray()
  daysOfWeek?: WeekDays[];

  @ApiPropertyOptional({ description: 'Interval in days', example: 2 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  intervalDays?: number;

  @ApiPropertyOptional({ description: 'Repetitions per day', example: 3 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  repsPerDay?: number;
}
