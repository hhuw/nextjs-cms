import { Module } from '@nestjs/common';
import { LinkListService } from './link-list.service';
import { LinkListController } from './link-list.controller';

@Module({
  providers: [LinkListService],
  controllers: [LinkListController]
})
export class LinkListModule {}
