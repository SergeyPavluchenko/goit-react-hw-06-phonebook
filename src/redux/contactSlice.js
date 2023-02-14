import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addNewContacts: {
      reducer(state, action) {
        state.items = [action.payload, ...state.items];
      },
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewContacts } = contactSlice.actions;

console.log(addNewContacts);
