import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('link-list')
@Controller('link-list')
export class LinkListController {}
