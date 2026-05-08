import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from '@/shared/pipes/zod-validation.pipe';
import { GetProductUseCase } from '../../../application/use-cases/get-product.use-case';
import { CreateProductUseCase } from '../../../application/use-cases/create-product.use-case';
import {
  type CreateProductDto,
  CreateProductSchema,
} from './dto/create-product.dto';

@Controller('catalog')
export class CatalogHttpAdapter {
  constructor(
    private readonly getProductUseCase: GetProductUseCase,
    private readonly createProductUseCase: CreateProductUseCase,
  ) {}

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.getProductUseCase.execute(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(CreateProductSchema))
  create(@Body() createProductDto: CreateProductDto) {
    return this.createProductUseCase.execute(createProductDto);
  }
}
