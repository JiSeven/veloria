import { Controller, Get } from '@nestjs/common';

import {
  VehicleResponseDto,
  toVehicleResponseDto,
} from './dto/find-vehicle-response.dto';
import { FindAllVehiclesUseCase } from '../../../../application/use-cases/find-all-vehicles.use-case';

@Controller('vehicles')
export class VehiclesHttpAdapter {
  constructor(
    private readonly findAllVehiclesUseCase: FindAllVehiclesUseCase,
  ) {}

  @Get()
  async findAll(): Promise<VehicleResponseDto[]> {
    const vehicles = await this.findAllVehiclesUseCase.execute();

    return vehicles.map(toVehicleResponseDto);
  }
}
