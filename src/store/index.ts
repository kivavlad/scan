import { configureStore } from "@reduxjs/toolkit";
import makeAuthSlice from "./slice/makeAuthSlice";
import accountInfoSlice from "./slice/accountInfoSlice";

const store = configureStore({
    reducer: {
        auth: makeAuthSlice,
        info: accountInfoSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;