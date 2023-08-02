import { strContains } from '../components/utils/strContains';

export const getColumnsByList = ({ columns }, listId) => columns.filter((column) => column.listId === listId);
export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter((card) => card.columnId === columnId && strContains(card.title, searchString));

const createActionName = actionName => `app/lists/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

export const addColumn = (newColumn) => ({ type: ADD_COLUMN, newColumn });

const columnsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_COLUMN:
        return [...statePart, { ...action.newColumn }];
    default:
        return statePart;
    }
};

export default columnsReducer;