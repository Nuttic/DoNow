import { IsString, IsOptional, MinLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @ApiPropertyOptional({ description: 'Role name', example: 'admin' })
  @IsOptional()
  @IsString()
  @MinLength(2)
  role_name?: string;
}
