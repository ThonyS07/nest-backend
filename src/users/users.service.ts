import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@/commons/interfaces/user.interface';
import { CreateUserDto } from './dto/createUsers.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
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
  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User | undefined {
    const position = this.findUserIndexById(id);
    const user = this.users[position];
    if (user.id === '1') {
      throw new ForbiddenException(`User is forbidden`);
    }
    return user;
  }

  create(body: CreateUserDto) {
    const newUser = { ...body, id: `${new Date().getTime()}` };
    this.users.push(newUser);
    return newUser;
  }

  delete(id: string) {
    const position = this.findUserIndexById(id);
    this.users.splice(position, 1);
    return { message: `User with ID ${id} deleted successfully` };
  }

  update(id: string, changes: UpdateUserDto) {
    const position = this.findUserIndexById(id);
    const existingUser = this.users[position];
    const updatedUser = { ...existingUser, ...changes };
    this.users[position] = updatedUser;
    return updatedUser;
  }

  private findUserIndexById(id: string): number {
    const position = this.users.findIndex((user) => user.id === id);
    if (position === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return position;
  }
}
