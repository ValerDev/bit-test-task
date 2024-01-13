import { configureStore, combineReducers } from '@reduxjs/toolkit'
import usersSlice from './users/slice';

const rootReducer = combineReducers({
  usersSlice
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
  });
};

export const store = setupStore()
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];