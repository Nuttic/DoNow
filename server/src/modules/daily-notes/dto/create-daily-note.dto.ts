import { IsString, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDailyNoteDto {
  @ApiProperty({ description: 'Note content', example: 'Today I felt productive...' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: 'Note date', example: '2024-01-15' })
  @IsDateString()
  noteDate: Date;

  @ApiProperty({ description: 'User ID', example: 1 })
  @IsNumber()
  user_id: number;
}
