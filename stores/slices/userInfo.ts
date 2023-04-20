import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from 'stores';

export interface UserState {
  shiping: UserContact
}

const initialState: UserState = {
  shiping: {
    name: "",
    email: "",
    phone: "",
    company: "",
    zip: "",
    city: "",
    address: "",
    state: "Italy"
  },
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeShiping: (state, action: PayloadAction<UserContact>) => {
      state.shiping = action.payload
    }
  },

  extraReducers: {
    [HYDRATE]: (state: UserState, action: any) => {
      return {
        ...state,
        ...action.payload.user,
      };
    }
  },
})

export const { changeShiping } = userReducer.actions

export const selectUser = (state: AppState) => state.user;

export default userReducer.reducer