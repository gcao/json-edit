import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import layoutReducers from '../features/layout/slice';
import jsonEditReducers from '../features/json-edit/slice';

export const store = configureStore({
  reducer: {
    layout: layoutReducers,
    jsonEdit: jsonEditReducers,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
