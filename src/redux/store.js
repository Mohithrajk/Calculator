import { createStore } from 'redux';
import { reducer } from './state';

const store = createStore(reducer);

export default store;
