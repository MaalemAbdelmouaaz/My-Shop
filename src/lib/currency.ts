import { getCurrencyConfig } from "./config";

// Currency configuration for the application
export const CURRENCY_CONFIG = getCurrencyConfig();

// Alternative locale configurations
export const LOCALE_CONFIG = {
  "ar-DZ": "ar-DZ", // Arabic (Algeria)
  "fr-DZ": "fr-DZ", // French (Algeria) - alternative
  "en-DZ": "en-US", // English fallback with DZD
};

/**
 * Format a price according to the configured currency
 * @param price - The price to format
 * @param options - Optional formatting options
 * @returns Formatted price string
 */
export function formatPrice(
  price: number,
  options: {
    locale?: string;
    showCurrency?: boolean;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  } = {}
): string {
  const {
    locale = CURRENCY_CONFIG.locale,
    showCurrency = true,
    minimumFractionDigits = CURRENCY_CONFIG.decimals,
    maximumFractionDigits = CURRENCY_CONFIG.decimals,
  } = options;

  try {
    if (showCurrency) {
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: CURRENCY_CONFIG.code,
        minimumFractionDigits,
        maximumFractionDigits,
      }).format(price);
    } else {
      // Format just the number without currency
      const formatted = new Intl.NumberFormat(locale, {
        minimumFractionDigits,
        maximumFractionDigits,
      }).format(price);
      
      // Add currency symbol based on position
      return CURRENCY_CONFIG.position === "before" 
        ? `${CURRENCY_CONFIG.symbol} ${formatted}`
        : `${formatted} ${CURRENCY_CONFIG.symbol}`;
    }
  } catch (error) {
    // Fallback formatting if locale is not supported
    const formatted = price.toFixed(CURRENCY_CONFIG.decimals);
    return CURRENCY_CONFIG.position === "before"
      ? `${CURRENCY_CONFIG.symbol} ${formatted}`
      : `${formatted} ${CURRENCY_CONFIG.symbol}`;
  }
}

/**
 * Format a price range (min - max)
 * @param minPrice - Minimum price
 * @param maxPrice - Maximum price
 * @param options - Optional formatting options
 * @returns Formatted price range string
 */
export function formatPriceRange(
  minPrice: number,
  maxPrice: number,
  options?: Parameters<typeof formatPrice>[1]
): string {
  const formattedMin = formatPrice(minPrice, options);
  const formattedMax = formatPrice(maxPrice, options);
  
  if (minPrice === maxPrice) {
    return formattedMin;
  }
  
  return `${formattedMin} - ${formattedMax}`;
}

/**
 * Get currency symbol only
 * @returns Currency symbol
 */
export function getCurrencySymbol(): string {
  return CURRENCY_CONFIG.symbol;
}

/**
 * Get currency code only
 * @returns Currency code
 */
export function getCurrencyCode(): string {
  return CURRENCY_CONFIG.code;
}

/**
 * Convert USD to DZD (you'll need to implement actual conversion rates)
 * This is a placeholder - you should integrate with a real exchange rate API
 * @param usdAmount - Amount in USD
 * @returns Amount in DZD
 */
export function convertUSDToDZD(usdAmount: number): number {
  // As of 2024, approximate rate: 1 USD ≈ 134 DZD
  // You should replace this with real-time exchange rates
  const EXCHANGE_RATE = 134;
  return usdAmount * EXCHANGE_RATE;
}

/**
 * Convert DZD to USD (you'll need to implement actual conversion rates)
 * This is a placeholder - you should integrate with a real exchange rate API
 * @param dzdAmount - Amount in DZD
 * @returns Amount in USD
 */
export function convertDZDToUSD(dzdAmount: number): number {
  // As of 2024, approximate rate: 1 USD ≈ 134 DZD
  // You should replace this with real-time exchange rates
  const EXCHANGE_RATE = 134;
  return dzdAmount / EXCHANGE_RATE;
} 