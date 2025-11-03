import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto } from '../dto/createCategory.dto';
import { UpdateCategoryDto } from '../dto/updateCategory.dto';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(category);
  }

  findAll(): Promise<Category[]> {
    const categories = this.categoryRepository.find();
    return categories;
  }

  async findOne(id: string) {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException(`Category  ${id} not found`);
    }
    return category;
  }

  async update(id: string, changes: UpdateCategoryDto): Promise<Category> {
    try {
      const category = await this.categoryRepository.findOne({ where: { id } });
      if (!category) {
        throw new NotFoundException(`Category ${id} not found`);
      }
      const updatedCategory = this.categoryRepository.merge(category, changes);
      return this.categoryRepository.save(updatedCategory);
    } catch {
      throw new BadRequestException(`Error updating category ${id}`);
    }
  }

  async remove(id: string) {
    try {
      const category = await this.categoryRepository.findOne({ where: { id } });
      if (!category) {
        throw new NotFoundException(`Category with id ${id} not found`);
      }
      await this.categoryRepository.delete(id);
      return { message: `Category ${id} deleted successfully` };
    } catch {
      throw new BadRequestException(`Error deleting category ${id}`);
    }
  }
}
