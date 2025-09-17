# Currency Configuration Guide

This application has been configured to support **Algerian Dinar (DZD)** as the primary currency. Here's how the currency system works and how you can modify it.

## Current Configuration

The application is now set up with:
- **Currency**: Algerian Dinar (DZD)
- **Symbol**: دج (placed after the amount)
- **Locale**: Arabic (Algeria) - ar-DZ
- **Decimals**: 2 decimal places

## Files Modified

The following components have been updated to use the new currency system:

1. **Currency formatting utilities**: `src/lib/currency.ts`
2. **Configuration system**: `src/lib/config.ts`
3. **Product pricing**: `src/components/store/product-page/product-info/product-price.tsx`
4. **Cart summary**: `src/components/store/cart-page/summary.tsx`
5. **Order totals**: `src/components/store/cards/order/total.tsx`
6. **Shipping fees**: `src/components/store/product-page/shipping/shipping-fee.tsx`
7. **Header currency display**: `src/components/store/layout/header/country-lang-curr-selector.tsx`
8. **Dashboard order summary**: `src/components/dashboard/shared/store-order-summary.tsx`
9. **Payment gateways**: Stripe and PayPal configurations

## Environment Variables

Add these to your `.env` file to customize currency settings:

```env
# Currency Configuration
NEXT_PUBLIC_CURRENCY_CODE="DZD"
NEXT_PUBLIC_CURRENCY_SYMBOL="دج"
NEXT_PUBLIC_CURRENCY_NAME="Algerian Dinar"
NEXT_PUBLIC_CURRENCY_LOCALE="ar-DZ"
NEXT_PUBLIC_CURRENCY_POSITION="after"
NEXT_PUBLIC_CURRENCY_DECIMALS="2"

# Exchange Rates (Update with real-time rates)
NEXT_PUBLIC_USD_TO_DZD_RATE="134.0"

# Payment Gateway Currencies
NEXT_PUBLIC_STRIPE_CURRENCY="dzd"
NEXT_PUBLIC_PAYPAL_CURRENCY="USD"
```

## How to Switch to Another Currency

### 1. Update Environment Variables

To switch to EUR (Euro), for example:

```env
NEXT_PUBLIC_CURRENCY_CODE="EUR"
NEXT_PUBLIC_CURRENCY_SYMBOL="€"
NEXT_PUBLIC_CURRENCY_NAME="Euro"
NEXT_PUBLIC_CURRENCY_LOCALE="de-DE"
NEXT_PUBLIC_CURRENCY_POSITION="before"
NEXT_PUBLIC_STRIPE_CURRENCY="eur"
```

### 2. Update Exchange Rates

```env
NEXT_PUBLIC_USD_TO_EUR_RATE="0.92"
```

### 3. Payment Gateway Considerations

- **Stripe**: Supports most major currencies including DZD, EUR, USD, etc.
- **PayPal**: Has limited currency support. DZD is not supported, so you may need to use USD and handle conversion

## Currency Formatting Functions

Use these functions throughout the application:

```typescript
import { formatPrice, formatPriceRange } from "@/lib/currency";

// Format a single price
formatPrice(99.99); // "99.99 دج"

// Format a price range
formatPriceRange(50, 100); // "50.00 دج - 100.00 دج"
```

## Real-time Exchange Rates

The current implementation uses static exchange rates. For production, integrate with a real-time exchange rate API:

1. **exchangerate-api.com**
2. **fixer.io**
3. **openexchangerates.org**

Update the `convertUSDToDZD` and `convertDZDToUSD` functions in `src/lib/currency.ts`.

## Important Notes

1. **Database**: All prices are stored in the database as numbers. The currency formatting is applied only in the UI.

2. **Payment Processing**: 
   - Stripe accepts DZD
   - PayPal doesn't support DZD directly, so you might need to convert to USD for PayPal payments

3. **Existing Data**: If you have existing data in USD, you'll need to either:
   - Convert all existing prices to DZD
   - Or implement a migration system

4. **Localization**: The application now uses Arabic locale for number formatting. You can customize this in the configuration.

## Testing

After changing currency settings:

1. Test product pages to ensure prices display correctly
2. Test cart and checkout flow
3. Test payment processing with both Stripe and PayPal
4. Verify admin dashboard displays correct currency

## Remaining Items to Update

Some additional components that might need currency updates:

- `src/components/store/profile/payments/payments-table.tsx`
- `src/components/store/profile/orders/orders-table.tsx`
- `src/components/store/order-page/group-table.tsx`
- PDF invoice generation components

Use the same pattern: import `formatPrice` from `@/lib/currency` and replace hardcoded `$` symbols. 