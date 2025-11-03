import { IsString, IsEmail, IsNotEmpty, MinLength, MaxLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProfileDto } from './createProfile.dto';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsEmail()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  password: string;

  @ValidateNested()
  @Type(() => CreateProfileDto)
  @IsNotEmpty()
  profile: CreateProfileDto;
}
