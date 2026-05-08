import { CursorPage } from '@/shared/types/cursor-page.interface';
import { ProductEntity } from '../entities/product.entity';

export abstract class CatalogPort {
  abstract save(product: ProductEntity): Promise<ProductEntity>;

  abstract findById(id: string): Promise<ProductEntity | null>;

  abstract findAll(
    page: number,
    cursor?: number,
  ): Promise<CursorPage<ProductEntity>>;

  abstract findByNote(
    note: string,
    limit: number,
    cursor?: number,
  ): Promise<CursorPage<ProductEntity>>;
}
