import { Module } from '@nestjs/common';
import { CatalogPort } from './domain/ports/catalog.port';
import { PrismaCatalogAdapter } from './infrastructure/adapters/driven/prisma-catalog.adapter';
import { CreateProductUseCase } from './application/use-cases/create-product.use-case';
import { GetProductUseCase } from './application/use-cases/get-product.use-case';
import { CatalogHttpAdapter } from './infrastructure/adapters/driving/catalog.http.adapter';

@Module({
  controllers: [CatalogHttpAdapter],
  providers: [
    CreateProductUseCase,
    GetProductUseCase,
    {
      provide: CatalogPort,
      useClass: PrismaCatalogAdapter,
    },
  ],
})
export class CatalogModule {}
