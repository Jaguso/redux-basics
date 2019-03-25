import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import math from './reducers/mathReducer';
import user from './reducers/userReducer';

export default createStore(
    combineReducers({
        math, 
        user
    }),
    {}, 
    applyMiddleware(createLogger())
);

//OBS: the line of combineReducers also can be writen the next way
// combineReducers({
//     math: mathReducer, 
//     user: userReducer
// }), 
