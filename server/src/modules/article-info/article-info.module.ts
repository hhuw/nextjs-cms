import { Module } from '@nestjs/common';
import { ArticleInfoService } from './article-info.service';
import { ArticleInfoController } from './article-info.controller';

@Module({
  providers: [ArticleInfoService],
  controllers: [ArticleInfoController]
})
export class ArticleInfoModule {}
