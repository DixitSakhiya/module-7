import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [
        {id:1, name: 'jay patel', age:28},
        {id:2, name: 'rohan patel', age:24},
        {id:3, name: 'monu patel', age:26},
    ],
    searchQuery: '',
};

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
      setSearchQuery(state, action) {
        state.searchQuery = action.payload;
      },
    },
  });
  
  export const { setSearchQuery } = tableSlice.actions;
  export default tableSlice.reducer;
  