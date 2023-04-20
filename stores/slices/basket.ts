import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from 'stores';

export interface BasketState {
  basket: BasketItem[]
}

const initialState: BasketState = {
  basket: [],
}

export const basketReducer = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    changeBasket: (state, action: PayloadAction<BasketState['basket']>) => {
      state.basket = action.payload
    }
  },

  extraReducers: {
    [HYDRATE]: (state: BasketState, action: any) => {
      return {
        ...state,
        ...action.payload.basket,
      };
    }
  },
})

export const { changeBasket } = basketReducer.actions

export const selectBasket = (state: AppState) => state.basket.basket;

export default basketReducer.reducer