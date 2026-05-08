import { Injectable } from '@nestjs/common';
import { CatalogPort } from '../../domain/ports/catalog.port';
import { ProductNotFoundException } from '../../domain/exceptions/product-not-found.exception';

@Injectable()
export class GetProductUseCase {
  constructor(private readonly catalogPort: CatalogPort) {}

  async execute(id: string) {
    const product = await this.catalogPort.findById(id);

    if (!product) throw new ProductNotFoundException(id);

    return product;
  }
}
