import { legacy_createStore as createStore } from 'redux';

const constants = require('../constants');

export const initialState = {
  bill: 0,
  tip: 0,
  people: 0,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'BILL':
      return { ...state, bill: parseInt(action.value) };
    case 'TIP':
      return { ...state, tip: parseInt(action.value) / 100 };
    case 'PEOPLE':
      return { ...state, people: parseInt(action.value) };
    case 'RESET':
      return { ...state, ...initialState };
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

export default store;
