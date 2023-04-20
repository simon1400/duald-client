import { configureStore, ThunkAction, Action, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { stateReducer } from "./slices/diffState";
import { metaReducer } from "./slices/metaSlices";
import { categoryReducer } from "./slices/categoryNav";
import { productsReducer } from "./slices/products";
import { basketReducer } from "./slices/basket";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";
import { userReducer } from "./slices/userInfo";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  [basketReducer.name]: persistReducer(persistConfig, basketReducer.reducer),
  [metaReducer.name]: metaReducer.reducer,
  [stateReducer.name]: stateReducer.reducer,
  [categoryReducer.name]: categoryReducer.reducer,
  [productsReducer.name]: productsReducer.reducer,
  [userReducer.name]: userReducer.reducer,
})

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: customizedMiddleware,
    devTools: process.env.NODE_ENV !== 'production'
  });

export const persistedStore = () => persistStore(makeStore());

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);