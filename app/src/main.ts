import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ErrorInterceptor } from './infrastructure/interceptors/error.interceptor';

const fastify = new FastifyAdapter();
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastify,
  );

  app.useGlobalInterceptors(new ErrorInterceptor());

  const config = new DocumentBuilder()
    .setTitle('NestJS - Api Exchange Rate')
    .setDescription('Api Exchange Rate')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
