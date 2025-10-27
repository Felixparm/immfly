import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PriceCategory } from '../types/enums';

export interface BasketItem {
  productId: number;
  title: string;
  quantity: number;
}

export interface BasketState {
  items: BasketItem[];
  currency: string;
  selectedCategory: PriceCategory;
}

const initialState: BasketState = {
  items: [],
  currency: 'USD',
  selectedCategory: PriceCategory.RETAIL,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<{ productId: number; title: string }>) => {
      const { productId, title } = action.payload;
      const existingItem = state.items.find(item => item.productId === productId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ productId, title, quantity: 1 });
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const itemIndex = state.items.findIndex(item => item.productId === productId);
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        if (item.quantity <= 1) {
          state.items.splice(itemIndex, 1);
        } else {
          item.quantity -= 1;
        }
      }
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    setCategory: (state, action: PayloadAction<PriceCategory>) => {
      state.selectedCategory = action.payload;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.productId !== productId);
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const { increment, decrement, setCurrency, setCategory, removeItem, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;