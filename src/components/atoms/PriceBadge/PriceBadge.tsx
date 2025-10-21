import React from 'react';
import { PriceBadgeProps } from './PriceBadge.types';
import { Badge, Text } from './PriceBadge.styles';

export default function PriceBadge({ price }: PriceBadgeProps) {
  return (
    <Badge>
      <Text>${price}</Text>
    </Badge>
  );
}