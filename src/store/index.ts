import { configureStore } from "@reduxjs/toolkit";
import authorizationSlice from "./slice/authorizationSlice";
import accountInfoSlice from "./slice/accountInfoSlice";
import histogramsSlice from "./slice/histogramsSlice";
import documentsSlice from "./slice/documentsSlice";

const store = configureStore({
    reducer: {
        auth: authorizationSlice,
        info: accountInfoSlice,
        histograms: histogramsSlice,
        docs: documentsSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;