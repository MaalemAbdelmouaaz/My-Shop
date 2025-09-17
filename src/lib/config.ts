// Application configuration
export const APP_CONFIG = {
  // Currency Configuration
  currency: {
    // Change this to switch between currencies
    code: process.env.NEXT_PUBLIC_CURRENCY_CODE || "DZD",
    symbol: process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "دج",
    name: process.env.NEXT_PUBLIC_CURRENCY_NAME || "Algerian Dinar",
    locale: process.env.NEXT_PUBLIC_CURRENCY_LOCALE || "ar-DZ",
    position: (process.env.NEXT_PUBLIC_CURRENCY_POSITION as "before" | "after") || "after",
    decimals: parseInt(process.env.NEXT_PUBLIC_CURRENCY_DECIMALS || "2"),
  },
  
  // Exchange rates (you should replace with real-time API)
  exchangeRates: {
    // Base currency rates (relative to USD)
    USD_TO_DZD: parseFloat(process.env.NEXT_PUBLIC_USD_TO_DZD_RATE || "134"),
    USD_TO_EUR: parseFloat(process.env.NEXT_PUBLIC_USD_TO_EUR_RATE || "0.92"),
    USD_TO_GBP: parseFloat(process.env.NEXT_PUBLIC_USD_TO_GBP_RATE || "0.79"),
  },
  
  // Payment gateway configurations
  payments: {
    stripe: {
      // Stripe supports DZD (Algerian Dinar)
      currency: process.env.NEXT_PUBLIC_STRIPE_CURRENCY || "dzd",
    },
    paypal: {
      // PayPal has limited currency support, you might need to use USD and convert
      currency: process.env.NEXT_PUBLIC_PAYPAL_CURRENCY || "USD", // PayPal doesn't support DZD directly
    },
  },
  
  // Regional settings
  region: {
    defaultCountry: process.env.NEXT_PUBLIC_DEFAULT_COUNTRY || "DZ",
    defaultLanguage: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE || "ar",
  },
};

// Helper function to get currency configuration
export function getCurrencyConfig() {
  return APP_CONFIG.currency;
}

// Helper function to get exchange rates
export function getExchangeRates() {
  return APP_CONFIG.exchangeRates;
}

// Helper function to get payment configuration
export function getPaymentConfig() {
  return APP_CONFIG.payments;
} 