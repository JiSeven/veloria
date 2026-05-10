import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { env } from './config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();

  app.enableCors();

  await app.listen(env.PORT);
}

bootstrap();
