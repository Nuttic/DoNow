import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ description: 'Category name', example: 'Health' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Color in hex format', example: '#FF5733' })
  @IsString()
  @IsNotEmpty()
  color_hex: string;
}
