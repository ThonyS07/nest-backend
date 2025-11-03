import { User } from '@/users/entities/users.entity';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Category } from './category.entity';

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
    nullable: true,
  })
  coverImage: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  summary: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  content: string;

  @Column({
    type: 'boolean',
    default: true,
    name: 'is_draft',
  })
  isDraft: boolean;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.posts, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'author_id' })
  user: User;

  // @ManyToMany(() => Category, (category) => category.posts)
  // @JoinTable({
  //   name: 'posts_categories',
  //   joinColumn: { name: 'post_id', referencedColumnName: 'id' },
  //   inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' },
  // })
  // categories: Category[];
}
