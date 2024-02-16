import { NestFactory } from '@nestjs/core';

// import { AppModule } from './app.module';
import { TaskModule } from './task/task.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(TaskModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
