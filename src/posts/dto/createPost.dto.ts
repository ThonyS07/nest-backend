import { IsString, IsNotEmpty, MinLength, MaxLength, ValidateNested, IsBoolean, IsOptional, IsArray, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsOptional()
  @MinLength(6)
  @MaxLength(20)
  coverImage: string;

  @IsString()
  @IsOptional()
  @MinLength(6)
  @MaxLength(20)
  summary: string;

  @IsString()
  @IsOptional()
  @MinLength(6)
  @MaxLength(20)
  content: string;

  @IsBoolean()
  @IsOptional()
  isDraft: boolean;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  categoryIds: string[];
}
