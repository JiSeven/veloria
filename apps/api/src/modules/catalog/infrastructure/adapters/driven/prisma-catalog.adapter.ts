import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../prisma/prisma.service';
import { CatalogPort } from '../../../domain/ports/catalog.port';
import { ProductEntity } from '../../../domain/entities/product.entity';
import { ProductAlreadyExistsException } from '@/modules/catalog/domain/exceptions/product-already-exists.exception';
import { PrismaClientKnownRequestError, Product } from '@veloria/database';
import {
  ScentProfile,
  ScentProfileProps,
} from '@/modules/catalog/domain/value-objects/scent-profile.vo';
import { Money } from '@/modules/catalog/domain/value-objects/money.vo';
import { ProductType } from '@/modules/catalog/domain/enums/product-type';

@Injectable()
export class PrismaCatalogAdapter extends CatalogPort {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async save(entity: ProductEntity): Promise<ProductEntity> {
    try {
      const record = await this.prisma.client.product.create({
        data: {
          id: entity.id,
          name: entity.name,
          description: entity.description,
          brand: entity.brand,
          type: entity.type,
          priceAmount: entity.price.amount,
          priceCurrency: entity.price.currency,
          scentProfile: entity.scentProfile.toPlain(),
          createdAt: entity.createdAt,
        },
      });

      return this.toDomain(record);
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ProductAlreadyExistsException(entity.name);
      }

      throw error;
    }
  }

  async findAll(): Promise<ProductEntity[]> {
    const products = await this.prisma.client.product.findMany();
    return products.map((p) => this.mapToEntity(p));
  }

  async findById(id: string): Promise<ProductEntity | null> {
    const record = await this.prisma.client.product.findUnique({
      where: { id },
    });

    if (!record) return null;

    return this.toDomain(record);
  }

  private toDomain(record: Product): ProductEntity {
    const scentProfileData = record.scentProfile as ScentProfileProps;

    return ProductEntity.reconstitute({
      id: record.id,
      name: record.name,
      description: record.description,
      brand: record.brand,
      type: record.type as ProductType,
      price: Money.of(record.priceAmount, record.priceCurrency),
      scentProfile: ScentProfile.create(scentProfileData),
      createdAt: record.createdAt,
    });
  }
}
