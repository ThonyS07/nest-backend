import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createUsers.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
