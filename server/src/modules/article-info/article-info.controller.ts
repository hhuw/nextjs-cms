import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ArticleInfoService } from './article-info.service';

@ApiTags('文章信息')
@Controller('article-info')
export class ArticleInfoController {
  constructor(private readonly articleInfoService: ArticleInfoService) {}

  @Get('base-info')
  getBasicInfo(@Query() id: number) {
    return this.articleInfoService.getBasicInfo(id);
  }
}
