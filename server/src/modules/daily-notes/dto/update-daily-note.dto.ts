import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateDailyNoteDto } from './create-daily-note.dto';

export class UpdateDailyNoteDto extends PartialType(CreateDailyNoteDto) {
  @ApiPropertyOptional({ description: 'Note content', example: 'Today I felt productive...' })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional({ description: 'Note date', example: '2024-01-15' })
  @IsOptional()
  @IsDateString()
  noteDate?: Date;

  @ApiPropertyOptional({ description: 'User ID', example: 1 })
  @IsOptional()
  @IsNumber()
  user_id?: number;
}
