import { VehicleEntity } from '../entities/vehicle.entity';

export abstract class VehiclesPort {
  abstract findAllVehicles(): Promise<VehicleEntity[]>;
}
