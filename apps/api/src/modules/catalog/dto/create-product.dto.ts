import { z } from 'zod';

export const CreateProductSchema = z.object({
  name: z.string().min(3),
  brand: z.string(),
  type: z.enum(['CANDLE', 'PERFUME']),
  price: z.number().positive(),
  description: z.string(),
  scentProfile: z.object({
    top: z.array(z.string()),
    heart: z.array(z.string()),
    base: z.array(z.string()),
  }),
});

export type CreateProductDto = z.infer<typeof CreateProductSchema>;
