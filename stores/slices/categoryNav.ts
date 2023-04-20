import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from 'stores';

export interface CategoryState {
  categoryNav: {
    title: string;
    slug: string;
    icon: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
  }[]
  activeCategory: number
}

const initialState: CategoryState = {
  categoryNav: [],
  activeCategory: 0
}

export const categoryReducer = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategoryNav: (state, action: PayloadAction<CategoryState['categoryNav']>) => {
      state.categoryNav = action.payload
    },
    changeActiveCategory: (state, action: PayloadAction<number>) => {
      state.activeCategory = action.payload
    }
  },

  extraReducers: {
    [HYDRATE]: (state: CategoryState, action: any) => {
      return {
        ...state,
        ...action.payload.category,
      };
    }
  },
})

export const { changeCategoryNav, changeActiveCategory } = categoryReducer.actions

export const selectCategory = (state: AppState) => state.category.categoryNav;
export const selectActiveCategory = (state: AppState) => state.category.activeCategory;

export default categoryReducer.reducer