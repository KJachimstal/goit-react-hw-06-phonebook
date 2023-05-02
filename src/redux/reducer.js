const initialState = {
  contacts: [
    { name: 'Ala', number: '11-11-11', id: 1 },
    { name: 'Hela', number: '11-11-11', id: 2 },
    { name: 'Ela', number: '11-11-11', id: 3 },
  ],
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }

    case 'contacts/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }

    case 'filter/setFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return state;
  }
};
