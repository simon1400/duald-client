import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from 'stores';

export interface NavState {
  modal: boolean
  danwer: boolean
}

const initialState: NavState = {
  modal: false,
  danwer: false
}

export const stateReducer = createSlice({
  name: 'state',
  initialState,
  reducers: {
    changeModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    changeDanwer: (state, action: PayloadAction<boolean>) => {
      state.danwer = action.payload
    }
  },

  extraReducers: {
    [HYDRATE]: (state: NavState, action: any) => {
      return {
        ...state,
        ...action.payload.state,
      };
    }
  },
})

export const { changeModal, changeDanwer } = stateReducer.actions

export const selectAllState = (state: AppState) => state.state;

export default stateReducer.reducer