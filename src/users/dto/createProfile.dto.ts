import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty({ description: 'Name of the user' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  firstName: string;

  @ApiProperty({ description: 'LastName of the user' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  lastName: string;

  @ApiProperty({ description: 'Bio of the user' })
  @IsString()
  @IsOptional()
  @MinLength(50)
  @MaxLength(1000)
  bio: string;

  @ApiProperty({ description: 'Avatar URL of the user' })
  @IsString()
  @IsOptional()
  @IsUrl()
  avatar: string;
}
