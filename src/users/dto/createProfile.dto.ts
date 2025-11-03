import { IsNotEmpty, IsOptional, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  lastName: string;

  @IsString()
  @IsOptional()
  @MinLength(50)
  @MaxLength(1000)
  bio: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  avatar: string;
}
