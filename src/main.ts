import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT ?? 3000;

  await app.listen(port);
  console.log(`🚀 Server running on port ${port}`);
}

bootstrap();
