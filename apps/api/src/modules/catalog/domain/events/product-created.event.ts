import { DomainEvent } from './domain-event.base';
import { ProductType } from '../enums/product-type';

export class ProductCreatedEvent extends DomainEvent {
  readonly name = 'ProductCreatedEvent';

  constructor(
    public readonly productId: string,
    public readonly productName: string,
    public readonly productType: ProductType,
    public readonly priceCurrency: string,
    public readonly priceAmount: number,
  ) {
    super();
  }
}
