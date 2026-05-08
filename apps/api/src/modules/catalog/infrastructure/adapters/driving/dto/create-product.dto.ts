import { ProductType } from '@/modules/catalog/domain/enums/product-type';
import { z } from 'zod';

const ISO_4217_REGEX = /^[A-Z]{3}$/;

export const CreateProductSchema = z.object({
  name: z
    .string()
    .min(3, 'Product name must be at least 3 characters')
    .max(100, 'Product name cannot exceed 100 characters'),

  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .max(2000, 'Description cannot exceed 2000 characters'),

  brand: z
    .string()
    .min(1, 'Brand name is required')
    .max(100, 'Brand name cannot exceed 100 characters'),

  type: z.enum(ProductType, {
    error: () => ({
      message: `Type must be one of: ${Object.values(ProductType).join(', ')}`,
    }),
  }),

  price: z.object({
    amount: z.number().positive('Price amount must be a positive number'),
    currency: z
      .string()
      .regex(
        ISO_4217_REGEX,
        'Currency must be a 3-letter ISO 4217 code (e.g. EUR, USD, GBP)',
      ),
  }),

  scentProfile: z
    .object({
      top: z.array(z.string().min(1, 'Note cannot be blank')),
      heart: z.array(z.string().min(1, 'Note cannot be blank')),
      base: z.array(z.string().min(1, 'Note cannot be blank')),
    })
    .refine(
      ({ top, heart, base }) => top.length + heart.length + base.length > 0,
      'Scent profile must contain at least one note across any layer',
    )
    .refine(
      ({ top }) => top.length > 0,
      'Scent profile must include at least one top note',
    ),
});

export type CreateProductDto = z.infer<typeof CreateProductSchema>;
