import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleInfoEntity } from './common/entities/article-info.entity';
import { ArticleIntroductionsEntity } from './common/entities/article-introductions.entity';
import { HomeEntity } from './common/entities/home.entity';
import { LayoutEntity } from './common/entities/layout.entity';
import { LinkListEntity } from './common/entities/link-list';
import { LinkEntity } from './common/entities/link.entity';
import { ArticleInfoModule } from './modules/article-info/article-info.module';
import { ArticleIntroductionModule } from './modules/article-introduction/article-introduction.module';
import { HomeModule } from './modules/home/home.module';
import { LayoutModule } from './modules/layout/layout.module';
import { LinkModule } from './modules/link/link.module';
import { LinkListModule } from './modules/link-list/link-list.module';

const entities = [
  ArticleInfoEntity,
  ArticleIntroductionsEntity,
  HomeEntity,
  LayoutEntity,
  LinkEntity,
  LinkListEntity,
];

const modules = [
  ArticleInfoModule,
  ArticleIntroductionModule,
  HomeModule,
  LayoutModule,
  LinkModule,
  LinkListModule,
];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'liujf553',
      database: 'postgres',
      schema: 'public',
      synchronize: true,
      entities: [...entities],
    }),
    ...modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
