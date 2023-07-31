const listsReducer = (statePart = [], action) => {
    switch (action.type) {
    case 'ADD_LIST':
        return [...statePart, { ...action.newList }];
    default:
        return statePart;
    }
};

export default listsReducer;