import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key: 'root',
    storage,
    blacklist : []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWare = [logger]

export const store = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWare)
})
export const persistor = persistStore(store)