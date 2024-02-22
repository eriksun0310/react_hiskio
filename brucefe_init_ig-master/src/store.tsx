import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "services/homeServices";
import friendReducer from "slices/friendSlice";

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    friendReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware),
});

//推斷當下store的類型: 主要是給hook用的
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
