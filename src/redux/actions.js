import { nanoid } from 'nanoid';

export const addContact = newContact => {
  return {
    type: 'contacts/addComtact',
    payload: {
      name: newContact.name,
      number: newContact.number,
      id: nanoid(),
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const setFilter = filterValue => {
  return {
    type: 'filter/setFilter',
    payload: filterValue,
  };
};
