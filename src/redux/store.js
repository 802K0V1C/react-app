import { legacy_createStore as createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../components/utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter((card) => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = ({ columns }) => columns;

export const getListById = ({ lists }, listId) => lists.find((list) => list.id === listId);

export const getColumnsByList = ({ columns }, listId) => columns.filter((column) => column.listId === listId);

export const getAllLists = ({ lists }) => lists;

export const getIsFavoriteCards = ({ cards }) => cards.filter((card) => card.isFavorite === true);

//action creators
export const addColumn = (newColumn) => ({ type: 'ADD_COLUMN', newColumn });

export const addList = (newList) => ({ type: 'ADD_LIST', newList });

export const searchUpdate = (updateSearchString) => ({ type: 'SEARCH_UPDATE', updateSearchString });

export const addCard = newCard => ({ type: 'ADD_CARD', newCard});

export const toggleCardFavorite = (payload) => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

const reducer = (state, action) => {
    const newState = {
        lists: listsReducer(state.lists, action),
        columns: columnsReducer(state.columns, action),
        cards: cardsReducer(state.cards, action),
        searchString: searchStringReducer(state.searchString, action)
    };
    
    return newState;
    };
    
    const listsReducer = (statePart = [], action) => {
    switch(action.type) {
        case 'ADD_LIST':
        return [...statePart, { ...action.newList }];
        default:
        return statePart;
    }
    }
    
    const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
    case 'ADD_COLUMN':
        return [...statePart, { ...action.newColumn }];
        default:
        return statePart;
    }
    }
    
    const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
    case 'ADD_CARD':
    return [...statePart, { ...action.newCard }];
    case 'ADD_LIST':
        return [...statePart, { ...action.newCard }];
    case 'TOGGLE_CARD_FAVORITE':
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default: 
    return statePart;
}
};

const searchStringReducer = (statePart = '', action) => {
switch(action.type) {
    case 'SEARCH_UPDATE':
    return action.updateSearchString
    default:
    return statePart;
}
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;