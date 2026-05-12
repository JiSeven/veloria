import { Module } from '@nestjs/common';

import { VehiclesModule } from './modules/vehicles/vehicles.module';

@Module({
  imports: [VehiclesModule],
  controllers: [],
})
export class AppModule {}
