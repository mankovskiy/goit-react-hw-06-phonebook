import { createSlice } from '@reduxjs/toolkit';

const filtrInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filtrInitialState,
  reducers: {
    setFilterValue: {
      reducer(state, action) {
        return (state = action.payload);
      },
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
