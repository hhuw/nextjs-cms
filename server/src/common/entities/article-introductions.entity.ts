import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('articleIntroductions')
export class ArticleIntroductionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  info: number;

  @Column()
  articleId: number;
}
