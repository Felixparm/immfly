import React from 'react';
import { PriceBadgeProps } from './PriceBadge.types';
import { Badge, Text } from './PriceBadge.styles';
import { formatPrice, getCurrencySymbol } from '../../../utils/currencyConverter';

export default function PriceBadge({ price, currency }: PriceBadgeProps) {
  return (
    <Badge>
      <Text>{getCurrencySymbol(currency)}{formatPrice(price)}</Text>
    </Badge>
  );
}