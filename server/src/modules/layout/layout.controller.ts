import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('layout')
@Controller('layout')
export class LayoutController {}
