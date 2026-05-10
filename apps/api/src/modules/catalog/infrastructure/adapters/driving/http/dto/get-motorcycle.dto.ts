// ─── Response ─────────────────────────────────────────────────────────────────

import { MotorcycleEntity } from '@/catalog/domain/entities/motorcycle.entity';

export interface MotorcycleResponseDto {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  priceInCents: number;
  createdAt: string;
}

export function toMotorcycleResponseDto(
  entity: MotorcycleEntity,
): MotorcycleResponseDto {
  return {
    id: entity.id,
    name: entity.name,
    make: entity.make,
    model: entity.model,
    year: entity.year,
    priceInCents: entity.priceInCents,
    createdAt: entity.createdAt.toISOString(),
  };
}
