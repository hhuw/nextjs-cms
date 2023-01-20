import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('home')
@Controller('home')
export class HomeController {}
