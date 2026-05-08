import { Injectable } from '@nestjs/common';

import { ProductNotFoundException } from '@/catalog/domain/exceptions/product-not-found.exception';
import { CatalogPort } from '@/catalog/domain/ports/catalog.port';

@Injectable()
export class GetProductUseCase {
  constructor(private readonly catalogPort: CatalogPort) {}

  async execute(id: string) {
    const product = await this.catalogPort.findById(id);

    if (!product) throw new ProductNotFoundException(id);

    return product;
  }
}
