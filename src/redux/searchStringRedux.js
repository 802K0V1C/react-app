const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
    case 'SEARCH_UPDATE':
        return action.updateSearchString;
    default:
        return statePart;
    }
};