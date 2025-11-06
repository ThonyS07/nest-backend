import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ description: 'Name of the category' })
  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  name: string;
}
