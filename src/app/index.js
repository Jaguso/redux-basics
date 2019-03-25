// import React from "react";
// import {render} from "react-dom";

// import { User } from './components/User';
// import { Main } from './components/Main';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Max"
//         };
//     }

//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }

// render(<App />, window.document.getElementById('app'));


import { createStore, combineReducers, applyMiddleware } from 'redux';

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


const userReducer = (state = {
    name: "Max",
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state, //we have to leave this if there are values of initialState that we don't modify in this action
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action);
};

const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(myLogger)); // 1 is thess initial state

store.subscribe(() => {
    console.log("Store updated", store.getState());
});

// OBS: Each time we dispatch an action, the state duplicates
store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "ADD",
    payload: 22
});

store.dispatch({
    type: "SUBTRACT",
    payload: 80
});

store.dispatch({
    type: "SET_AGE",
    payload: 30
});