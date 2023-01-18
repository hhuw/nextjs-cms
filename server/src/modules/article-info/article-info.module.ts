import { Module } from '@nestjs/common';
import { ArticleInfoService } from './article-info.service';
import { ArticleInfoController } from './article-info.controller';
import { ArticleInfoEntity } from 'src/common/entities/article-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleInfoEntity])],
  providers: [ArticleInfoService],
  controllers: [ArticleInfoController],
})
export class ArticleInfoModule {}
