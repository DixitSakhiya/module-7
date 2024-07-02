import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './tableSlice'; // Ensure this matches the file name

export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});