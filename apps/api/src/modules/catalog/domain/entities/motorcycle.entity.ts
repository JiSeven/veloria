import { randomUUID } from 'node:crypto';
import { BaseEntity } from './base.entity';

export interface MotorcycleProps {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  priceInCents: number;
  createdAt: Date;
}

export type CreateMotorcycleProps = Omit<MotorcycleProps, 'id' | 'createdAt'>;

export class MotorcycleEntity extends BaseEntity {
  private constructor(private readonly props: MotorcycleProps) {
    super();
  }

  // ─── Getters ─────────────────────────────────────────────────────────────────
  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get make() {
    return this.props.make;
  }

  get model() {
    return this.props.model;
  }

  get year() {
    return this.props.year;
  }

  get priceInCents() {
    return this.props.priceInCents;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  // ─── Factories ───────────────────────────────────────────────────────────────

  public static create(props: CreateMotorcycleProps): MotorcycleEntity {
    MotorcycleEntity.validate(props);

    const entity = new MotorcycleEntity({
      ...props,
      id: randomUUID(),
      createdAt: new Date(),
    });

    return entity;
  }

  public static reconstitute(props: MotorcycleProps): MotorcycleEntity {
    return new MotorcycleEntity(props);
  }

  // ─── Validation ──────────────────────────────────────────────────────────────

  private static validate(props: CreateMotorcycleProps): void {
    const currentYear = new Date().getFullYear();

    if (!props.make.trim()) {
      throw new Error('Make cannot be blank');
    }

    if (!props.model.trim()) {
      throw new Error('Model cannot be blank');
    }

    if (
      !Number.isInteger(props.year) ||
      props.year < 1900 ||
      props.year > currentYear + 1
    ) {
      throw new Error(
        `Year must be between 1900 and ${currentYear + 1}, received: ${props.year}`,
      );
    }

    if (!Number.isInteger(props.priceInCents) || props.priceInCents < 0) {
      throw new Error('Price must be a non-negative integer (cents)');
    }
  }
}
