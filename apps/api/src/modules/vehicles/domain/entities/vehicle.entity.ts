import { randomUUID } from 'node:crypto';

import { BaseEntity } from './base.entity';

export interface VehicleProps {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

export type CreateVehicleProps = Omit<VehicleProps, 'id' | 'createdAt'>;

export class VehicleEntity extends BaseEntity {
  private constructor(private readonly props: VehicleProps) {
    super();
  }

  // ─── Getters ─────────────────────────────────────────────────────────────────
  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  // ─── Factories ───────────────────────────────────────────────────────────────

  public static create(props: CreateVehicleProps): VehicleEntity {
    VehicleEntity.validate(props);

    const entity = new VehicleEntity({
      ...props,
      id: randomUUID(),
      createdAt: new Date(),
    });

    return entity;
  }

  public static reconstitute(props: VehicleProps): VehicleEntity {
    return new VehicleEntity(props);
  }

  // ─── Validation ──────────────────────────────────────────────────────────────

  private static validate(props: CreateVehicleProps): void {
    // TODO: implement validation
  }
}
