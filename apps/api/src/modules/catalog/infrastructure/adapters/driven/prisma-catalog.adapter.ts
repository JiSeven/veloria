import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../prisma/prisma.service';
import { ProductCatalogPort } from '../../../domain/ports/product-catalog.port';
import { CreateProductDto } from '../../../dto/create-product.dto';
import { ProductEntity } from '../../../domain/entities/product.entity';

@Injectable()
export class PrismaCatalogAdapter extends ProductCatalogPort {
  constructor(private readonly prismaService: PrismaService) {
    super();
  }

  async save(data: CreateProductDto): Promise<ProductEntity> {
    const product = await this.prismaService.client.product.create({
      data: {
        ...data,
        scentProfile: data.scentProfile,
      },
    });
    return this.mapToEntity(product);
  }

  async findAll(): Promise<ProductEntity[]> {
    const products = await this.prismaService.client.product.findMany();
    return products.map((p) => this.mapToEntity(p));
  }

  async findById(id: string): Promise<ProductEntity | null> {
    const product = await this.prismaService.client.product.findUnique({
      where: { id },
    });

    if (!product) return null;
    return this.mapToEntity(product);
  }

  private mapToEntity(product: any): ProductEntity {
    return new ProductEntity(
      product.id,
      product.name,
      product.description,
      product.brand,
      product.price,
      product.scentProfile,
    );
  }
}
