import { Module } from '@nestjs/common';
import { ArticleIntroductionService } from './article-introduction.service';
import { ArticleIntroductionController } from './article-introduction.controller';

@Module({
  providers: [ArticleIntroductionService],
  controllers: [ArticleIntroductionController]
})
export class ArticleIntroductionModule {}
