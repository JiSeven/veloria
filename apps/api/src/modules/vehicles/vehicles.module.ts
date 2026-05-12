import { Module } from '@nestjs/common';

import { PrismaModule } from '@/prisma/prisma.module';

import { FindAllVehiclesUseCase } from './application/use-cases/find-all-vehicles.use-case';
import { VehiclesPort } from './domain/ports/vehicles.port';
import { InMemoryCatalogAdapter } from './infrastructure/adapters/driven/in-memory-catalog.adapter';
import { VehiclesHttpAdapter } from './infrastructure/adapters/driving/http/vehicles.http.adapter';

@Module({
  imports: [PrismaModule],
  controllers: [VehiclesHttpAdapter],
  providers: [
    FindAllVehiclesUseCase,
    {
      provide: VehiclesPort,
      useClass: InMemoryCatalogAdapter,
    },
  ],
})
export class VehiclesModule {}
