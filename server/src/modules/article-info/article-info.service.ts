import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleInfoEntity } from 'src/common/entities/article-info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleInfoService {
  constructor(
    @InjectRepository(ArticleInfoEntity)
    private readonly articleInfoRepository: Repository<ArticleInfoEntity>,
  ) {}

  async getBasicInfo(id: number) {
    const employee = await this.articleInfoRepository.findOne({
      where: { id },
    });
    if (!employee) return void 0;
    return employee;
  }
}
