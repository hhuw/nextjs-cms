import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('article-introduction')
@Controller('article-introduction')
export class ArticleIntroductionController {}
