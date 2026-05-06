import { IsNumber, IsDateString, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateHabitLogDto } from './create-habit-log.dto';

export class UpdateHabitLogDto extends PartialType(CreateHabitLogDto) {
  @ApiPropertyOptional({ description: 'Habit ID', example: 1 })
  @IsOptional()
  @IsNumber()
  habit_id?: number;

  @ApiPropertyOptional({ description: 'Log date', example: '2024-01-15' })
  @IsOptional()
  @IsDateString()
  logDate?: Date;

  @ApiPropertyOptional({ description: 'Log status', example: 'Выполнено' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ description: 'Execution time', example: '10:30' })
  @IsOptional()
  @IsString()
  executionTime?: string;
}
