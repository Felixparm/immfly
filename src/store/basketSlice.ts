import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PriceCategory } from '../types/enums';

export interface BasketState {
  items: Record<number, number>;
  currency: string;
  selectedCategory: PriceCategory;
}

const initialState: BasketState = {
  items: {},
  currency: 'USD',
  selectedCategory: PriceCategory.RETAIL,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.items[productId] = (state.items[productId] || 0) + 1;
    },
    decrement: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const currentQuantity = state.items[productId] || 0;
      if (currentQuantity <= 1) {
        delete state.items[productId];
      } else {
        state.items[productId] = currentQuantity - 1;
      }
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    setCategory: (state, action: PayloadAction<PriceCategory>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { increment, decrement, setCurrency, setCategory } = basketSlice.actions;
export default basketSlice.reducer;