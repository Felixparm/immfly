import { Product } from '../../../types';

export interface ProductCardProps {
  product: Product;
  quantity?: number;
  showButtons?: boolean;
  showPrice?: boolean;
  disabled?: boolean;
  currency?: string;
  onIncrement?: () => void;
  onDecrement?: () => void;
}