import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({
  name: 'posts',
})
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 200,
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 200,
    name: 'cover_image',
  })
  coverImage: string;
  @Column({
    type: 'text',
    name: 'summary',
  })
  summary: string;
  @Column({
    type: 'text',
  })
  content: string;
  @Column({
    type: 'boolean',
    default: true,
    name: 'is_draft',
  })
  isDraft: boolean;

  @Column({
    type: 'uuid',
  })
  authorId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
