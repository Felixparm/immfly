import { useAppSelector, useAppDispatch } from '../hooks/useAppSelector';
import { increment, decrement, setCurrency as setCurrencyAction, setCategory, removeItem, clearBasket } from './basketSlice';
import { PriceCategory } from '../types/enums';

export function useBasket() {
  const dispatch = useAppDispatch();
  const { items, currency, selectedCategory } = useAppSelector((state) => state.basket);

  const handleIncrement = (productId: number, title: string) => {
    dispatch(increment({ productId, title }));
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

  const handleRemoveItem = (productId: number) => {
    dispatch(removeItem(productId));
  };

  const handleClearBasket = () => {
    dispatch(clearBasket());
  };

  return {
    basket: items,
    currency,
    selectedCategory,
    handleIncrement,
    handleDecrement,
    setCurrency,
    handleCategoryChange,
    handleRemoveItem,
    handleClearBasket,
  };
}