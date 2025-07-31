import { extendZod as extendZodCurrency } from 'zod-currency';
import { OBJECT_EXTEND_FUNCTION_ENTRIES } from 'universal-symbols';

/**
 * Extends Zod with additional schema types and methods
 * @param zod - The Zod instance to extend
 * @returns The extended Zod instance with additional methods
 */
export function extendZod(zod: typeof import('zod').z): ReturnType<typeof extendZodCurrency> {
  return extendZodCurrency(zod);
}

export const zz = {
  currency: (zod: typeof import('zod').z) => extendZodCurrency(zod).currency,
};
