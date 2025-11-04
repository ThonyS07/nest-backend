import { IsString, IsNotEmpty, MinLength, MaxLength, IsBoolean, IsOptional, IsArray } from 'class-validator';

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
