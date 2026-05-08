import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductCatalogPort } from '../../domain/ports/product-catalog.port';

@Injectable()
export class GetProductUseCase {
  constructor(private readonly repository: ProductCatalogPort) {}

  async execute(id: string) {
    const product = await this.repository.findById(id);

    if (!product) throw new NotFoundException('Product not found');

    return product;
  }
}
