import { IsNumber, IsDateString, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LogStatus } from '../../../db/entities/habit-log.entity';

export class CreateHabitLogDto {
  @ApiProperty({ description: 'Habit ID', example: 1 })
  @IsNumber()
  habit_id: number;

  @ApiProperty({ description: 'Log date', example: '2024-01-15' })
  @IsDateString()
  logDate: Date;

  @ApiProperty({ description: 'Log status', enum: LogStatus, required: false })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({ description: 'Execution time', example: '10:30', required: false })
  @IsOptional()
  @IsString()
  executionTime?: string;
}
