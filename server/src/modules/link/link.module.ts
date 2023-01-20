import { Module } from '@nestjs/common';
import { LinkService } from './link.service';
import { LinkController } from './link.controller';
import { LinkEntity } from 'src/common/entities/link.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LinkEntity])],
  providers: [LinkService],
  controllers: [LinkController],
})
export class LinkModule {}
