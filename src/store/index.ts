import { configureStore } from "@reduxjs/toolkit";
import makeAuthSlice from "./slice/makeAuthSlice";

const store = configureStore({
    reducer: {
        auth: makeAuthSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;