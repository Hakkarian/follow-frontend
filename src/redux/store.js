import persistReducer from "redux-persist/es/persistReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import userReducer from "./reducers/userReducer";



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["users"]
}

const persistedReducer = persistReducer(persistConfig, userReducer);

const rootReducer = combineReducers({
  users: persistedReducer
})

export const store = configureStore({
  reducer: rootReducer,
      middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE],
      },
    }),
});

export const persistor = persistStore(store);