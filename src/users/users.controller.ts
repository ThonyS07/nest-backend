import { Controller, Get, Post, Delete, Body, Param, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/createUsers.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get(':id/profile')
  getUserProfile(@Param('id') id: string) {
    return this.usersService.getUserProfile(id);
  }

  @Get(':id/posts')
  getUserPosts(@Param('id') id: string) {
    return this.usersService.getUserPosts(id);
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() changes: UpdateUserDto) {
    return this.usersService.update(id, changes);
  }
}
