import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as express from 'express';
import { ApiOperation } from '@nestjs/swagger';

import { PostsService } from '../services/posts.service';
import { CreatePostDto } from '../dto/createPost.dto';
import { UpdatePostDto } from '../dto/updatePost.dto';
import { JwtPayload } from '@/commons/interfaces/jwtPayload.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @ApiOperation({ summary: 'Create a new post' })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPostDto: CreatePostDto, @Req() req: express.Request) {
    const user = req.user as JwtPayload;
    const userId = user.sub;
    return this.postsService.create(createPostDto, userId);
  }

  @ApiOperation({ summary: 'Get all posts' })
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @ApiOperation({ summary: 'Get a post by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a post by ID' })
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @ApiOperation({ summary: 'Delete a post by ID' })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
