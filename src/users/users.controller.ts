import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';

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
      throw new HttpException('User with id ' + id + ' not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
