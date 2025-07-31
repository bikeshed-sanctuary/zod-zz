# zod-zz

One [zod-extend](https://github.com/bikeshed-sanctuary/zod-extend) package to rule them all, one [zod-extend](https://github.com/bikeshed-sanctuary/zod-extend) package to find them, One [zod-extend](https://github.com/bikeshed-sanctuary/zod-extend) package to bring package them all and in the darkness bind them. 


A Zod extension package that provides additional schema types and methods for enhanced validation.

```bash
npm install zod zod-zz
```

```typescript
import { z } from 'zod';
import { extendZod } from 'zod-zz';

const zz = extendZod(z);

zz.string();   // existing zod functions
zz.currency(); // extended set of zod functions
```

## Available Extensions

### Currency

Validates ISO 4217 currency codes:

```typescript
import { z } from 'zod';
import { extendZod } from 'zod-zz';

const extendedZod = extendZod(z);
const currencySchema = extendedZod.currency();

// Valid currencies
currencySchema.parse('USD'); // ✅
currencySchema.parse('EUR'); // ✅
currencySchema.parse('GBP'); // ✅
currencySchema.parse('usd'); // ✅ (case-insensitive)

// Invalid currencies
currencySchema.parse('INVALID'); // ❌ Throws error
currencySchema.parse(''); // ❌ Throws error
```

## API Reference

### `extendZod(zod: typeof z): typeof z`

Extends a Zod instance with additional schema types and methods.

**Parameters:**
- `zod`: The Zod instance to extend

**Returns:**
- The extended Zod instance with additional methods

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## License

MIT 