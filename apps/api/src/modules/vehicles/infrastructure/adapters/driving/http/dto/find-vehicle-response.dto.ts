// ─── Response ─────────────────────────────────────────────────────────────────

import { VehicleEntity } from '@/vehicles/domain/entities/vehicle.entity';

export interface VehicleResponseDto {
  id: string;
  name: string;
  createdAt: string;
  description: string;
}

export function toVehicleResponseDto(
  entity: VehicleEntity,
): VehicleResponseDto {
  return {
    id: entity.id,
    name: entity.name,
    description: entity.description,
    createdAt: entity.createdAt.toISOString(),
  };
}
