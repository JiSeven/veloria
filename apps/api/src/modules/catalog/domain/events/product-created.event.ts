import { ProductType } from '../enums/product-type';

export class ProductCreatedEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly productId: string,
    public readonly productName: string,
    public readonly productType: ProductType,
    public readonly priceCurrency: string,
    public readonly priceAmount: number,
  ) {
    this.occurredAt = new Date();
  }
}
