import { Controller, Get, Param } from '@nestjs/common';

@Controller('catalog')
export class CatalogController {
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return {
      id,
      name: 'Veloria Midnight Candle',
      brand: 'Veloria',
      price: 85,
      description: 'Premium sandalwood and amber candle',
    };
  }
}
