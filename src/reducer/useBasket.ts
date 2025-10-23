import { useAppSelector, useAppDispatch } from '../hooks/useAppSelector';
import { increment, decrement, setCurrency as setCurrencyAction, setCategory } from '../store/basketSlice';
import { PriceCategory } from '../types/enums';

export function useBasket() {
  const dispatch = useAppDispatch();
  const { items, currency, selectedCategory } = useAppSelector((state) => state.basket);

  const handleIncrement = (productId: number) => {
    dispatch(increment(productId));
  };

  const handleDecrement = (productId: number) => {
    dispatch(decrement(productId));
  };

  const setCurrency = (currency: string) => {
    dispatch(setCurrencyAction(currency));
  };

  const handleCategoryChange = (category: PriceCategory) => {
    dispatch(setCategory(category));
  };

  return {
    basket: items,
    currency,
    selectedCategory,
    handleIncrement,
    handleDecrement,
    setCurrency,
    handleCategoryChange,
  };
}