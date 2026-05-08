import { ProductEntity } from '@/modules/catalog/domain/entities/product.entity';
import { ProductType } from '@/modules/catalog/domain/enums/product-type';

export interface MoneyResponseDto {
  amount: number;
  currency: string;
}

export interface ScentProfileResponseDto {
  top: string[];
  heart: string[];
  base: string[];
}

export interface ProductResponseDto {
  id: string;
  name: string;
  description: string;
  brand: string;
  type: ProductType;
  price: MoneyResponseDto;
  scentProfile: ScentProfileResponseDto;
  createdAt: string;
}

export function toProductResponseDto(
  entity: ProductEntity,
): ProductResponseDto {
  return {
    id: entity.id,
    name: entity.name,
    description: entity.description,
    brand: entity.brand,
    type: entity.type,
    price: entity.price.toPlain(),
    scentProfile: entity.scentProfile.toPlain(),
    createdAt: entity.createdAt.toISOString(),
  };
}
