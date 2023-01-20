import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ArticleInfoService } from './article-info.service';

@ApiTags('article-info')
@UseGuards(JwtAuthGuard)
@Controller('article-info')
export class ArticleInfoController {
  constructor(private readonly articleInfoService: ArticleInfoService) {}

  @Get('base-info')
  getBasicInfo(@Query() id: number) {
    return this.articleInfoService.getBasicInfo(id);
  }
}
