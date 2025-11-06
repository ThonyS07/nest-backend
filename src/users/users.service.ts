import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUsers.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.findUserById(id);
    if (user.id === '1') {
      throw new ForbiddenException(`User is forbidden`);
    }
    return user;
  }

  async getUserProfile(id: string) {
    const user = await this.findUserById(id);
    return user.profile;
  }

  async getUserPosts(id: string) {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: ['posts'],
    });
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user.posts;
  }

  async create(body: CreateUserDto) {
    try {
      const newUser = this.usersRepository.create(body);
      const savedNewUser = await this.usersRepository.save(newUser);
      return this.findOne(savedNewUser.id);
    } catch {
      throw new BadRequestException('Error creating user');
    }
  }

  async delete(id: string) {
    try {
      await this.usersRepository.delete(id);
      return { message: `User ${id} deleted successfully` };
    } catch {
      throw new BadRequestException('Error deleting user');
    }
  }

  async update(id: string, changes: UpdateUserDto) {
    try {
      const user = await this.findUserById(id);
      const updatedUser = this.usersRepository.merge(user, changes);
      const savedUser = await this.usersRepository.save(updatedUser);
      return savedUser;
    } catch {
      throw new BadRequestException('Error updating user');
    }
  }

  private async findUserById(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id }, relations: ['profile', 'posts'] });
    if (!user) {
      throw new NotFoundException(`User  ${id} not found`);
    }
    return user;
  }
}
