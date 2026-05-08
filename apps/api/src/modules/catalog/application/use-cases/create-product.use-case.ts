import { Injectable } from '@nestjs/common';
import { CatalogPort } from '../../domain/ports/catalog.port';
import { CreateProductCommand } from '../commands/create-product.command';
import { ProductEntity } from '../../domain/entities/product.entity';
import { Money } from '../../domain/value-objects/money.vo';
import { ScentProfile } from '../../domain/value-objects/scent-profile.vo';

@Injectable()
export class CreateProductUseCase {
  constructor(private readonly catalogPort: CatalogPort) {}

  async execute(command: CreateProductCommand): Promise<ProductEntity> {
    const price = Money.of(command.priceAmount, command.priceCurrency);
    const scentProfile = ScentProfile.create(command.scentProfile);

    const product = ProductEntity.create({
      name: command.name,
      description: command.description,
      brand: command.brand,
      type: command.type,
      price,
      scentProfile,
    });

    const saved = await this.catalogPort.save(product);

    return saved;
  }
}
