import { Product } from '../../../types';

export interface ProductCardProps {
  product: Product;
  quantity?: number;
  showButtons?: boolean;
  showPrice?: boolean;
  disabled?: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
}