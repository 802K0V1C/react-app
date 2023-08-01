const createActionName = actionName => `app/search/${actionName}`;
const SEARCH_UPDATE = createActionName('SEARCH_UPDATE');

export const searchUpdate = (updateSearchString) => ({ type: 'SEARCH_UPDATE', updateSearchString });

const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
        case SEARCH_UPDATE:
        return action.updateSearchString;
    default:
        return statePart;
    }
};

export default searchStringReducer;