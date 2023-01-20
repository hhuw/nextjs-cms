import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LinkService } from './link.service';

@ApiTags('link')
@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Get('base-info')
  getBasicInfo(@Query() id: number) {
    return this.linkService.getBasicInfo(id);
  }
}
