import { configureStore } from "@reduxjs/toolkit";
import makeAuthSlice from "./slice/makeAuthSlice";
import accountInfoSlice from "./slice/accountInfoSlice";
import histogramsSlice from "./slice/histogramsSlice";

const store = configureStore({
    reducer: {
        auth: makeAuthSlice,
        info: accountInfoSlice,
        histograms: histogramsSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;