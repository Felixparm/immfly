export interface BasketItemProps {
  id: number;
  label: string;
  count: number;
  totalPrice: number;
  currency: string;
  onRemove?: (id: number) => void;
}