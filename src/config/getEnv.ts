import dotenv from 'dotenv';
import { Environment, EnvironmentSchema } from "../schema/environment.schema";
dotenv.config();

const validatedEnv = EnvironmentSchema.parse(process.env);

export function getEnv<K extends keyof Environment>(key: K, fallback?: Environment[K]): Environment[K] {
  const value = validatedEnv[key];
  if (value === undefined) {
    if (fallback !== undefined) {
      return fallback;
    } else {
      throw new Error(`Missing environment variable: ${key}`);
    }
  }
  return value;
}
