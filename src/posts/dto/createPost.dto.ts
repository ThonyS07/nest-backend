import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength, MaxLength, IsBoolean, IsOptional, IsArray } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'Title of the post' })
  @IsString()
  @IsNotEmpty()
  title: string;
  @ApiProperty({ description: 'Name of the category' })
  @IsString()
  @IsOptional()
  category: string;
  @ApiProperty({ description: 'Cover image URL of the post' })
  @IsString()
  @IsOptional()
  @MinLength(6)
  @MaxLength(20)
  coverImage: string;
  @ApiProperty({ description: 'Summary of the post' })
  @IsString()
  @IsOptional()
  @MinLength(6)
  @MaxLength(20)
  summary: string;
  @ApiProperty({ description: 'Content of the post' })
  @IsString()
  @IsOptional()
  @MinLength(6)
  @MaxLength(20)
  content: string;
  @ApiProperty({ description: 'Is draft of the post' })
  @IsBoolean()
  @IsOptional()
  isDraft: boolean;
  @ApiProperty({ description: 'ID of the category' })
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  categoryIds: string[];
}
