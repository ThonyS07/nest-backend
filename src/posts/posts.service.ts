import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    try {
      const newPost = await this.postsRepository.save(createPostDto);
      return newPost;
    } catch {
      throw new BadRequestException('Error creating post');
    }
  }

  async findAll(): Promise<Post[]> {
    const posts = await this.postsRepository.find();
    return posts;
  }

  async findOne(id: string) {
    const post = await this.postsRepository.findOne({ where: { id } });
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    try {
      const post = await this.findOne(id);
      if (!post) {
        throw new NotFoundException(`Post with ID ${id} not found`);
      }
      const updatedPost = this.postsRepository.merge(post, updatePostDto);
      const savedPost = await this.postsRepository.save(updatedPost);
      return savedPost;
    } catch {
      throw new BadRequestException('Error updating post');
    }
  }

  async remove(id: string): Promise<{ message: string }> {
    try {
      await this.postsRepository.delete({ id });
      return { message: `Post ${id} deleted successfully` };
    } catch {
      throw new BadRequestException('Error deleting post');
    }
  }
}
