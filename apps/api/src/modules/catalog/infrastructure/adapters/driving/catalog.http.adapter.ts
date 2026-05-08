import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UsePipes,
} from '@nestjs/common';
import { ZodValidationPipe } from '@/shared/pipes/zod-validation.pipe';
import { GetProductUseCase } from '../../../application/use-cases/get-product.use-case';
import { CreateProductUseCase } from '../../../application/use-cases/create-product.use-case';
import {
  type CreateProductDto,
  CreateProductSchema,
} from './dto/create-product.dto';
import {
  ProductResponseDto,
  toProductResponseDto,
} from './dto/product-response.dto';
import { CreateProductCommand } from '@/modules/catalog/application/commands/create-product.command';

@Controller('catalog')
export class CatalogHttpAdapter {
  constructor(
    private readonly getProductUseCase: GetProductUseCase,
    private readonly createProductUseCase: CreateProductUseCase,
  ) {}

  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<ProductResponseDto> {
    const product = await this.getProductUseCase.execute(id);

    return toProductResponseDto(product);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ZodValidationPipe(CreateProductSchema))
  async create(@Body() dto: CreateProductDto): Promise<ProductResponseDto> {
    const command = new CreateProductCommand(
      dto.name,
      dto.description,
      dto.brand,
      dto.type,
      dto.price.amount,
      dto.price.currency,
      dto.scentProfile,
    );

    const product = await this.createProductUseCase.execute(command);

    return toProductResponseDto(product);
  }
}
