import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
.filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = ({ columns }) => columns;

//action creators
export const addColumn = newColumn => ({ type: 'ADD_COLUMN', newColumn });

export const addCard = newCard => ({ type: 'ADD_CARD', newCard});

export const searchUpdate = updateSearchString => ({ type: 'SEARCH_UPDATE', updateSearchString});


const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;