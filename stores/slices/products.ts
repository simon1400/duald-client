import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from 'stores';

export interface ProductsState {
  products: any[]
  product: any
}

const initialState: ProductsState = {
  products: [],
  product: {}
}

export const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeProducts: (state, action: PayloadAction<ProductsState['products']>) => {
      state.products = action.payload
    },
    changeProduct: (state, action: PayloadAction<ProductsState['product']>) => {
      console.log(action.payload)
      state.product = action.payload
    }
  },

  extraReducers: {
    [HYDRATE]: (state: ProductsState, action: any) => {
      return {
        ...state,
        ...action.payload.products,
      };
    }
  },
})

export const { changeProducts, changeProduct } = productsReducer.actions

export const selectProducts = (state: AppState) => state.products.products;
export const selectProduct = (state: AppState) => state.products.product;

export default productsReducer.reducer