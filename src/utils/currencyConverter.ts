// Simple currency conversion rates
const EXCHANGE_RATES = {
  USD_TO_EUR: 0.85,
  USD_TO_GBP: 0.73,
};

export const convertUSDToEUR = (usdAmount: number): number => {
  return usdAmount * EXCHANGE_RATES.USD_TO_EUR;
};

export const convertUSDToGBP = (usdAmount: number): number => {
  return usdAmount * EXCHANGE_RATES.USD_TO_GBP;
};

export const convertPrice = (usdAmount: number, toCurrency: string): number => {
  switch(toCurrency) {
    case 'EUR': return usdAmount * EXCHANGE_RATES.USD_TO_EUR;
    case 'GBP': return usdAmount * EXCHANGE_RATES.USD_TO_GBP;
    default: return usdAmount;
  }
};

export const formatCurrency = (amount: number, currency: 'EUR' | 'GBP'): string => {
  const symbol = currency === 'EUR' ? '€' : '£';
  return `${symbol}${amount.toFixed(2)}`;
};

export const getDisplayAmount = (usdAmount: number, currency: string): string => {
  const amount = convertPrice(usdAmount, currency);
  if (currency === 'USD') return `$${amount.toFixed(2)}`;
  return formatCurrency(amount, currency as 'EUR' | 'GBP');
};