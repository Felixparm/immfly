import { BasketItem } from "../store/basketSlice";
import { Product } from "../types";

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


export const formatPrice = (amount: number): string => {
  return amount.toFixed(1);
};

export const getCurrencySymbol = (currency: string): string => {
  switch(currency) {
    case 'EUR': return '€';
    case 'GBP': return '£';
    default: return '$';
  }
};

export const getDisplayAmount = (usdAmount: number, currency: string): string => {
  const amount = convertPrice(usdAmount, currency);
  const symbol = getCurrencySymbol(currency);
  return `${symbol}${formatPrice(amount)}`;
};

export const calculateProductPrice = (product: Product, selectedCategory: string, currency: string, quantity: number = 1) => {
  const basePrice = selectedCategory === 'retail' ? product.price : product.discountPrice;
  const convertedPrice = convertPrice(basePrice, currency);
  const totalPrice = convertedPrice * quantity;
  
  return {
    basePrice,
    convertedPrice,
    totalPrice
  };
};