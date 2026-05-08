import { ProductType } from '@/catalog/domain/enums/product-type';
import { ScentProfileProps } from '@/catalog/domain/value-objects/scent-profile.vo';

export class CreateProductCommand {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly brand: string,
    public readonly type: ProductType,
    public readonly priceAmount: number,
    public readonly priceCurrency: string,
    public readonly scentProfile: ScentProfileProps,
  ) {}
}
