import { IsString, IsEmail, IsNotEmpty, MinLength, MaxLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProfileDto } from './createProfile.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Email of the user' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Password of the user' })
  @IsEmail()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  password: string;

  @ApiProperty({ description: 'Profile information of the user' })
  @ValidateNested()
  @Type(() => CreateProfileDto)
  @IsNotEmpty()
  profile: CreateProfileDto;
}
