import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addNewContacts: {
      reducer(state, action) {
        state.items = [action.payload, ...state.items];
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContacts(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewContacts, deleteContacts } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;

console.log(addNewContacts);
