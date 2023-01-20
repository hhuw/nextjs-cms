import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LinkEntity } from 'src/common/entities/link.entity';
import { Repository } from 'typeorm';
import { LinkQueryModel } from './models/link-query.model';

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(LinkEntity)
    private readonly LinkRepository: Repository<LinkEntity>,
  ) {}

  async getBasicInfo(id: number) {
    const result = await this.LinkRepository.findOne({
      where: { id },
    });
    if (!result) return void 0;
    return result;
  }

  async getData(filter: LinkQueryModel) {
    const query = this.LinkRepository.createQueryBuilder('link');
  }
}
