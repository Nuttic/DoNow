import { IsNumber, IsOptional, IsString, IsArray, IsEnum, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type, WeekDays } from '../../../db/entities/habit-schedule.entity';

export class CreateHabitScheduleDto {
  @ApiProperty({ description: 'Habit ID', example: 1 })
  @IsNumber()
  habit_id: number;

  @ApiProperty({ description: 'Schedule type', enum: Type, example: Type.WEEKLY })
  @IsEnum(Type)
  type: string;

  @ApiProperty({ description: 'Days of week', enum: WeekDays, isArray: true, required: false })
  @IsOptional()
  @IsArray()
  daysOfWeek?: WeekDays[];

  @ApiProperty({ description: 'Interval in days', example: 2, required: false })
  @IsOptional()
  @IsNumber()
  @Min(1)
  intervalDays?: number;

  @ApiProperty({ description: 'Repetitions per day', example: 3, required: false })
  @IsOptional()
  @IsNumber()
  @Min(1)
  repsPerDay?: number;
}
