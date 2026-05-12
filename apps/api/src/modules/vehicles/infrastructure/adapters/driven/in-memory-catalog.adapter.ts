import { Injectable } from '@nestjs/common';

import { VehicleEntity } from '../../../domain/entities/vehicle.entity';
import { VehiclesPort } from '../../../domain/ports/vehicles.port';

const SEED: VehicleEntity[] = [
  VehicleEntity.reconstitute({
    id: 'a1b2c3d4-0001-0000-0000-000000000001',
    name: 'Audi A4',
    description: '2.0 TFSI Sport (249 hp, Quattro)',
    createdAt: new Date('2024-01-10'),
  }),
];

@Injectable()
export class InMemoryCatalogAdapter implements VehiclesPort {
  private readonly store = new Map<string, VehicleEntity>(
    SEED.map((m) => [m.id, m]),
  );

  async findAllVehicles(): Promise<VehicleEntity[]> {
    return [...this.store.values()];
  }
}
