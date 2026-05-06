import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ description: 'Role name', example: 'admin' })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  role_name: string;
}
