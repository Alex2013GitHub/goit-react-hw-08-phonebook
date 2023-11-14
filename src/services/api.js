import { phonebookInstance } from './phonebookApi';

export const requestContacts = async () => {
  const { data } = await phonebookInstance.get('/contacts');
  return data;
};

export const requestAddContact = async newContact => {
  const { data } = await phonebookInstance.post('/contacts', newContact);
  return data;
};

export const requestDeleteContact = async contactId => {
  const { data } = await phonebookInstance.delete(`/contacts/${contactId}`);
  return data;
};
