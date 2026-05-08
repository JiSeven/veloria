import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { DomainExceptionFilter } from './shared/filters/domain-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Translate domain exceptions to HTTP responses throughout the entire app
  app.useGlobalFilters(new DomainExceptionFilter());

  app.enableShutdownHooks();

  app.enableCors();

  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
