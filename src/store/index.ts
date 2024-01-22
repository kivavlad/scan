import { configureStore } from "@reduxjs/toolkit";
import accountInfoSlice from "./slice/accountInfoSlice";
import histogramsSlice from "./slice/histogramsSlice";
import documentsSlice from "./slice/documentsSlice";

const store = configureStore({
    reducer: {
        info: accountInfoSlice,
        histograms: histogramsSlice,
        docs: documentsSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;