import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('CMS API')
    .setDescription('API接口')
    .setVersion('1.0.0')
    .addTag('auth')
    .addTag('article-info')
    .addTag('article-introduction')
    .addTag('home')
    .addTag('layout')
    .addTag('link')
    .addTag('link-list')
    .setBasePath('http://localhost:3000')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);
  await app.listen(3000);
}
bootstrap();
