import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestAddContact,
  requestContacts,
  requestDeleteContact,
} from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await requestContacts();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (newContact, thunkAPI) => {
    try {
      const contacts = await requestAddContact(newContact);
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkAPI) => {
    try {
      const contacts = await requestDeleteContact(contactId);
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
