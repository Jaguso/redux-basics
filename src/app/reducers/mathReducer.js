const mathReducer = (state = {
    result: 1, 
    lastValues: [] //values that we add or substract
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state, //we have to leave this if there are values of initialState that we don't modify in this action
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
};

export default mathReducer;
