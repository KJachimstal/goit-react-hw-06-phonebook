import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const preloadedState = {
  contacts: [
    { name: 'Ala', number: '11-11-11', id: 1 },
    { name: 'Hela', number: '11-11-11', id: 2 },
    { name: 'Ela', number: '11-11-11', id: 3 },
  ],
};

const phonebook = {
  contacts: [],
  filters: {
    status: '',
  },
};

const rootReducer = (state = phonebook, action) => {
  return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, preloadedState, enhancer);
