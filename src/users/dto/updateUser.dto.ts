import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createUsers.dto';
import { UpdateProfileDto } from './updateProfile.dto';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ['profile'])) {
  @ValidateNested()
  @Type(() => UpdateProfileDto)
  @IsNotEmpty()
  profile: UpdateProfileDto;
}
