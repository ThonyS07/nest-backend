import { IsString, IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsEmail()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  password: string;
}
