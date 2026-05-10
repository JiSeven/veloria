import { Injectable } from '@nestjs/common';

import { MotorcycleEntity } from '@/catalog/domain/entities/motorcycle.entity';
import { CatalogPort } from '@/catalog/domain/ports/catalog.port';

import { CreateMotorcycleCommand } from '../commands/create-motorcycle.command';

@Injectable()
export class CreateMotorcycleUseCase {
  constructor(private readonly catalogPort: CatalogPort) {}

  async execute(command: CreateMotorcycleCommand): Promise<MotorcycleEntity> {
    const motorcycle = MotorcycleEntity.create({
      name: command.name,
      make: command.make,
      model: command.model,
      priceInCents: command.priceInCents,
      year: command.year,
    });

    return this.catalogPort.saveMotorcycle(motorcycle);
  }
}
