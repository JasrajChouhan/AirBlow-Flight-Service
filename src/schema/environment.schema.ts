import { z } from 'zod';

export const EnvironmentSchema = z.object({
  NODE_ENV: z.union([z.literal('development'), z.literal('testing'), z.literal('production')]).default('development'),
  PORT: z
    .string()
    .transform(val => parseInt(val, 10))
    .refine(val => !Number.isNaN(val) && val > 0, 'PORT must be a positive and valid number')
    .default('3000'),
});

export type Environment = z.infer<typeof EnvironmentSchema>;
