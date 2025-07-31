import { z } from 'zod';
import { extendZod as extendZodCurrency } from 'zod-currency';

/**
 * Extends Zod with additional schema types and methods
 * @param zod - The Zod instance to extend
 * @returns The extended Zod instance with additional methods
 */
export function extendZod(zod: typeof z): ReturnType<typeof extendZodCurrency> {
  return extendZodCurrency(zod);
}

// Re-export zod for convenience
export { z }; 