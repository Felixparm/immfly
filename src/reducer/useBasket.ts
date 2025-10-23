import { useAppSelector, useAppDispatch } from '../hooks/useAppSelector';
import { increment, decrement, setCurrency as setCurrencyAction } from '../store/basketSlice';

export function useBasket() {
  const dispatch = useAppDispatch();
  const { items, currency } = useAppSelector((state) => state.basket);

  const handleIncrement = (productId: number) => {
    dispatch(increment(productId));
  };

  const handleDecrement = (productId: number) => {
    dispatch(decrement(productId));
  };

  const setCurrency = (currency: string) => {
    dispatch(setCurrencyAction(currency));
  };

  return {
    basket: items,
    currency,
    handleIncrement,
    handleDecrement,
    setCurrency,
  };
}