import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CatalogService {
  private readonly products = [
    {
      id: '1',
      name: 'Veloria Midnight Candle',
      brand: 'Veloria',
      price: 85,
      description: 'Премиальная свеча с нотами сандала и амбры',
    },
    {
      id: '2',
      name: 'Ethereal Mist Perfume',
      brand: 'Veloria',
      price: 120,
      description: 'Легкий аромат с верхними нотами бергамота',
    },
  ];

  findOne(id: string) {
    const product = this.products.find((p) => p.id === id);

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }
}
