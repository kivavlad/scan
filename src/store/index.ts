import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authorizationSlice from "./slice/authorizationSlice";
import accountInfoSlice from "./slice/accountInfoSlice";
import histogramsSlice from "./slice/histogramsSlice";
import documentsSlice from "./slice/documentsSlice";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    auth: authorizationSlice,
    info: accountInfoSlice,
    histograms: histogramsSlice,
    docs: documentsSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;