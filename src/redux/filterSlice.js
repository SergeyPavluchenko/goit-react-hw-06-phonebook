import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
console.log(setFilter);
