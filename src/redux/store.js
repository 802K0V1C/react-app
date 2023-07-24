import { legacy_createStore as createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../components/utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
.filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = ({ columns }) => columns;

//action creators
export const addColumn = newColumn => ({ type: 'ADD_COLUMN', newColumn });

export const addCard = newCard => ({ type: 'ADD_CARD', newCard});

export const searchUpdate = updateSearchString => ({ type: 'SEARCH_UPDATE', updateSearchString});

const reducer = (state, action) => {
switch (action.type) {
    case 'ADD_COLUMN':
    return { ...state, columns: [...state.columns, action.newColumn]};
    case 'ADD_CARD':
    return { ...state, cards: [...state.cards, action.newCard]}; 
    case 'SEARCH_UPDATE':
    return { ...state, searchString: action.updateSearchString};
    default:
    return state;
}
};
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;