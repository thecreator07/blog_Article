
import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./CardSlice.js"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "root",
    storage,
    CardReducer,
};

const persistedReducer = persistReducer(persistConfig, CardReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});