import { Module } from '@nestjs/common';
import { CatalogModule } from './modules/catalog/catalog.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CatalogModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
