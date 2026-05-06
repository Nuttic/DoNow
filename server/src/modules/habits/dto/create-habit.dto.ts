import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHabitDto {
  @ApiProperty({ description: 'Habit title', example: 'Morning exercise' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Habit description', example: 'Do 10 push-ups', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'User ID', example: 1 })
  @IsNumber()
  user_id: number;

  @ApiProperty({ description: 'Category ID', example: 1 })
  @IsNumber()
  category_id: number;
}
