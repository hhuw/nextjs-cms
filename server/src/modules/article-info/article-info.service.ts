import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleInfoEntity } from 'src/common/entities/article-info.entity';
import { Repository } from 'typeorm';
import { ArticleInfoQueryModel } from './models/article-info-query.model';

@Injectable()
export class ArticleInfoService {
  constructor(
    @InjectRepository(ArticleInfoEntity)
    private readonly articleInfoRepository: Repository<ArticleInfoEntity>,
  ) {}

  async getBasicInfo(id: number) {
    const result = await this.articleInfoRepository.findOne({
      where: { id },
    });
    if (!result) return void 0;
    return result;
  }

  async getData(filter: ArticleInfoQueryModel) {
    let query = this.articleInfoRepository
      .createQueryBuilder('articleInfo')
      .where('true');
    if (filter.skipCount) {
      query = query.offset(filter.skipCount);
    }
    if (filter.maxResultCount) {
      query = query.limit(filter.maxResultCount);
    }
    if (filter.author) {
      query = query.andWhere('articleInfo.author=:author', {
        author: filter.author,
      });
    }
    if (filter.content) {
      query = query.andWhere('article.content=:content', {
        content: filter.content,
      });
    }
    return await query.getMany();
  }
}
