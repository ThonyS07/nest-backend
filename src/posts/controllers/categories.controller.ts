import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';

import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto } from '../dto/createCategory.dto';
import { UpdateCategoryDto } from '../dto/updateCategory.dto';
import { PostsService } from '../services/posts.service';
import { Post as PostEntity } from '../entities/post.entity';

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly postsService: PostsService,
  ) {}

  @ApiResponse({
    status: 201,
    description: 'The category has been successfully created.',
  })
  @ApiOperation({ summary: 'Create a new category' })
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @ApiResponse({
    status: 201,
    description: 'The category has been successfully created.',
    type: PostEntity,
  })
  @ApiOperation({ summary: 'Get all categories' })
  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @ApiResponse({
    status: 201,
    description: 'The category has been successfully created.',
    type: PostEntity,
  })
  @ApiOperation({ summary: 'Get a category by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @ApiResponse({
    status: 201,
    description: 'The category has been successfully created.',
    type: PostEntity,
  })
  @ApiOperation({ summary: 'Get all posts by category ID' })
  @Get(':id/posts')
  findPostsByCategory(@Param('id') id: string) {
    return this.postsService.findPostsByCategory(id);
  }

  @ApiResponse({
    status: 201,
    description: 'The category has been successfully created.',
    type: PostEntity,
  })
  @ApiOperation({ summary: 'Update a category by ID' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @ApiResponse({
    status: 201,
    description: 'The category has been successfully created.',
    type: PostEntity,
  })
  @ApiOperation({ summary: 'Delete a category by ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
