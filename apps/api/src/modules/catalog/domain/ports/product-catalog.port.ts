import { CreateProductDto } from '../../dto/create-product.dto';
import { ProductEntity } from '../entities/product.entity';

export abstract class ProductCatalogPort {
  abstract save(data: CreateProductDto): Promise<ProductEntity>;
  abstract findAll(): Promise<ProductEntity[]>;
  abstract findById(id: string): Promise<ProductEntity | null>;
}
