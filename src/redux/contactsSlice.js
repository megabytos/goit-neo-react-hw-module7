import { createSlice, nanoid } from '@reduxjs/toolkit';
import defaultContacts from '../data/contacts.json';

const contactsInitialState = {
    items: defaultContacts,
  };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, phone }) {
        return {
          payload: {            
            id: nanoid(),
            name,
            number: phone,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(contact => contact.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items;