const addConstact = {
  type: 'contacts/addComtact',
  payload: {
    name: 'User entered name',
    number: 'User entered number',
    id: 'Generated ID',
  },
};

const deleteContact = {
  type: 'contacts/deleteContacts',
  payload: 'Contact ID',
};

const setFilter = {
  type: 'filter/setFilter',
  payload: 'Filter value',
};
