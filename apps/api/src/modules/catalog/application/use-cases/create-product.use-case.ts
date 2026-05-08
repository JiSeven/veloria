import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../dto/create-product.dto';
import { ProductCatalogPort } from '../../domain/ports/product-catalog.port';

@Injectable()
export class CreateProductUseCase {
  constructor(private readonly repository: ProductCatalogPort) {}

  async execute(dto: CreateProductDto) {
    return this.repository.save(dto);
  }
}
