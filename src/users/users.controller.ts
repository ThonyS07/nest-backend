import { Controller, NotFoundException, Get, Post, Delete, Body, Param, Put, UnprocessableEntityException, ForbiddenException } from '@nestjs/common';

interface User {
  id: string;
  name: string;
  email: string;
}
@Controller('users')
export class UsersController {
  private readonly users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'n3C6o@example.com',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'LWb0G@example.com',
    },
  ];
  @Get()
  getAllUsers() {
    return this.users;
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    if (user.id === '1') {
      throw new ForbiddenException(`User is forbidden`);
    }
    return user;
  }
  @Post()
  createUser(@Body() body: User) {
    const newUser = { ...body, id: `${new Date().getTime()}` };
    this.users.push(newUser);
    return newUser;
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.users.splice(index, 1);
    return { message: `User with ID ${id} deleted successfully` };
  }
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() body: User) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    const email = body?.email;
    const isValidEmail = email && email.includes('@');
    if (!isValidEmail) {
      throw new UnprocessableEntityException(`Email ${email} is not valid`); // or throw new BadRequestException(`Email ${email} is not valid`);
    }
    const existingUser = this.users[index];
    const updatedUser = { ...existingUser, ...body };
    this.users[index] = updatedUser;
    return updatedUser;
  }
}
