import { describe, it, expect } from 'vitest';
import { z } from 'zod';
import { extendZod } from './index';

describe('extendZod', () => {
  it('should add currency method to zod schemas', () => {
    const extendedZod = extendZod(z);
    
    // Test that the currency method exists
    expect(typeof extendedZod.currency).toBe('function');
    
    // Test that we can create a currency schema
    const currencySchema = extendedZod.currency();
    expect(currencySchema).toBeDefined();
  });

  // This is only tested to ensure the real zod-currency function is being used
  it('should validate currency values correctly', () => {
    const extendedZod = extendZod(z);
    const currencySchema = extendedZod.currency();
    
    // Test valid currency values
    expect(() => currencySchema.parse('USD')).not.toThrow();
    expect(() => currencySchema.parse('EUR')).not.toThrow();
    expect(() => currencySchema.parse('GBP')).not.toThrow();
    expect(() => currencySchema.parse('JPY')).not.toThrow();
    expect(() => currencySchema.parse('CAD')).not.toThrow();
    
    // Test invalid currency values
    expect(() => currencySchema.parse('INVALID')).toThrow();
    expect(() => currencySchema.parse('')).toThrow();
    expect(() => currencySchema.parse('XXY')).toThrow(); // non-existent code
  });
}); 
