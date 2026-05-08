import { randomUUID } from 'node:crypto';
import { ProductType } from '../enums/product-type';
import { Money } from '../value-objects/money.vo';
import { ScentProfile } from '../value-objects/scent-profile.vo';

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  brand: string;
  type: ProductType;
  price: Money;
  scentProfile: ScentProfile;
  createdAt: Date;
}

type CreateProductProps = Omit<ProductProps, 'id' | 'createdAt'>;

export class ProductEntity {
  private constructor(private readonly props: ProductProps) {}

  // ─── Factory: brand-new product, generates ID ────────

  public static create(props: CreateProductProps): ProductEntity {
    const entity = new ProductEntity({
      ...props,
      id: randomUUID(),
      createdAt: new Date(),
    });

    return entity;
  }

  // ─── Factory: rehydrate from persistence ─────────────────

  public static reconstitute(props: ProductProps): ProductEntity {
    return new ProductEntity(props);
  }

  // ─── Identity & basic props ──────────────────────────────────────────────────

  get id(): string {
    return this.props.id;
  }
  get name(): string {
    return this.props.name;
  }
  get description(): string {
    return this.props.description;
  }
  get brand(): string {
    return this.props.brand;
  }
  get type(): ProductType {
    return this.props.type;
  }
  get price(): Money {
    return this.props.price;
  }
  get scentProfile(): ScentProfile {
    return this.props.scentProfile;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }

  // ─── Domain behaviour ────────────────────────────────────────────────────────

  public hasNote(note: string): boolean {
    return this.props.scentProfile.hasNote(note);
  }
}
