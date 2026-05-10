import { Module } from '@nestjs/common';

import { CatalogModule } from './modules/catalog/catalog.module';

@Module({
  imports: [CatalogModule],
  controllers: [],
})
export class AppModule {}
