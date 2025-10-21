import { useReducer } from 'react';

export type BasketAction = 
  | { type: 'INCREMENT'; productId: number }
  | { type: 'DECREMENT'; productId: number };

export type BasketState = Record<number, number>;

function basketReducer(state: BasketState, action: BasketAction): BasketState {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, [action.productId]: (state[action.productId] || 0) + 1 };
    case 'DECREMENT':
      const currentQuantity = state[action.productId] || 0;
      if (currentQuantity <= 1) {
        const { [action.productId]: _, ...rest } = state;
        return rest;
      }
      return { ...state, [action.productId]: currentQuantity - 1 };
    default:
      return state;
  }
}

export function useBasket() {
  const [basket, dispatch] = useReducer(basketReducer, {});

  const handleIncrement = (productId: number) => {
    dispatch({ type: 'INCREMENT', productId });
  };

  const handleDecrement = (productId: number) => {
    dispatch({ type: 'DECREMENT', productId });
  };

  return {
    basket,
    handleIncrement,
    handleDecrement,
  };
}