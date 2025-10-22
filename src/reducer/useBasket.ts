import { useReducer } from 'react';

export type BasketAction = 
  | { type: 'INCREMENT'; productId: number }
  | { type: 'DECREMENT'; productId: number }
  | { type: 'SET_CURRENCY'; currency: string };

export type BasketState = {
  items: Record<number, number>;
  currency: string;
};

function basketReducer(state: BasketState, action: BasketAction): BasketState {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        items: { ...state.items, [action.productId]: (state.items[action.productId] || 0) + 1 }
      };
    case 'DECREMENT':
      const currentQuantity = state.items[action.productId] || 0;
      if (currentQuantity <= 1) {
        const { [action.productId]: _, ...rest } = state.items;
        return { ...state, items: rest };
      }
      return {
        ...state,
        items: { ...state.items, [action.productId]: currentQuantity - 1 }
      };
    case 'SET_CURRENCY':
      return { ...state, currency: action.currency };
    default:
      return state;
  }
}

export function useBasket() {
  const [basket, dispatch] = useReducer(basketReducer, { items: {}, currency: 'USD' });

  const handleIncrement = (productId: number) => {
    dispatch({ type: 'INCREMENT', productId });
  };

  const handleDecrement = (productId: number) => {
    dispatch({ type: 'DECREMENT', productId });
  };

  const setCurrency = (currency: string) => {
    dispatch({ type: 'SET_CURRENCY', currency });
  };

  return {
    basket: basket.items,
    currency: basket.currency,
    handleIncrement,
    handleDecrement,
    setCurrency,
  };
}