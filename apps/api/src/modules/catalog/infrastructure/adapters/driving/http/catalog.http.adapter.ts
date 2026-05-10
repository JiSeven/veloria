import { CreateMotorcycleUseCase } from '@/catalog/application/use-cases/create-motorcycle.use-case';
import { Controller, Get, Param } from '@nestjs/common';
import {
  MotorcycleResponseDto,
  toMotorcycleResponseDto,
} from './dto/get-motorcycle.dto';
import { GetMotorcycleUseCase } from '@/catalog/application/use-cases/get-motorcycle.use-case';

@Controller('catalog')
export class CatalogHttpAdapter {
  constructor(
    private readonly createMotorcycleUseCase: CreateMotorcycleUseCase,
    private readonly getMotorcycleUseCase: GetMotorcycleUseCase,
  ) {}

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<MotorcycleResponseDto | null> {
    const motorcycle = await this.getMotorcycleUseCase.execute(id);

    if (motorcycle) {
      return toMotorcycleResponseDto(motorcycle);
    }

    return null;
  }
}
