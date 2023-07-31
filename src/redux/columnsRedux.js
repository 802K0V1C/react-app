const columnsReducer = (statePart = [], action) => {
    switch (action.type) {
    case 'ADD_COLUMN':
        return [...statePart, { ...action.newColumn }];
    default:
        return statePart;
    }
};

export default columnsReducer;