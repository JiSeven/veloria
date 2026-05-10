import { Injectable } from '@nestjs/common';

import { MotorcycleEntity } from '@/catalog/domain/entities/motorcycle.entity';
import { CatalogPort } from '@/catalog/domain/ports/catalog.port';

@Injectable()
export class GetMotorcycleUseCase {
  constructor(private readonly catalogPort: CatalogPort) {}

  async execute(id: string): Promise<MotorcycleEntity | null> {
    return this.catalogPort.findMotorcycleById(id);
  }
}
