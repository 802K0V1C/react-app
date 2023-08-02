import { strContains } from '../components/utils/strContains';

export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter((card) => card.columnId === columnId && strContains(card.title, searchString));
export const getIsFavoriteCards = ({ cards }) => cards.filter((card) => card.isFavorite === true);

const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');

export const addCard = (newCard) => ({ type: ADD_CARD, newCard });
export const toggleCardFavorite = (payload) => ({ type: TOGGLE_CARD_FAVORITE, payload });
export const removeCard = (payload) => ({ type: REMOVE_CARD, payload });

const cardsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_CARD:
        return [...statePart, { ...action.newCard }];
        case TOGGLE_CARD_FAVORITE:
        return statePart.map((card) => (card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card));
        case REMOVE_CARD:
    return statePart.filter((card) => card.id !== action.payload);
        default:
        return statePart;
    }
};

export default cardsReducer;