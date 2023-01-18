import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('articleInfo')
export class ArticleInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  description: string;

  @Column()
  createTime: Date;

  @Column()
  content: string;
}
