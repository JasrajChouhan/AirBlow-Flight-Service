import { string, z } from 'zod';

export const EnvironmentSchema = z.object({
  NODE_ENV: z.union([z.literal('development'), z.literal('testing'), z.literal('production')]).default('development'),
  PORT: z
    .string()
    .transform(val => parseInt(val, 10))
    .refine(val => !Number.isNaN(val) && val > 0, 'PORT must be a positive and valid number')
    .default('3000'),
});

export type Environment = z.infer<typeof EnvironmentSchema>;

// Create airplane Schema
export const AirplaneSchema = z.object({
  model: string().min(5, { message: 'model must be at least 5 characters long' }),
  capacity: z.number().min(1, { message: 'capacity must be at least 1 characters long' }),
});

export type Airplane = z.infer<typeof AirplaneSchema>;


// city Schema
export const CitySchema = z.object({
  name : string().min(5, { message: 'name must be at least 5 characters long' }),
  pincode : string().min(4, { message: 'pincode must be at least 4 characters long' }).max(12 , {
    message: 'pincode must be at most 12 characters long'
  }),
});

export type City = z.infer<typeof CitySchema>;
