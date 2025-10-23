import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BasketState {
  items: Record<number, number>;
  currency: string;
}

const initialState: BasketState = {
  items: {},
  currency: 'USD',
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
  },
});

export const { increment, decrement, setCurrency } = basketSlice.actions;
export default basketSlice.reducer;