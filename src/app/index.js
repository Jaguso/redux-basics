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


import { createStore } from 'redux';

const initialState = {
    result: 1, 
    lastValues: [] //values that we add or substract
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload
            };
            state.lastValues.push(action.payload);
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload
            };
            state.lastValues.push(action.payload);
            break;
    }
    return state;
};

const store = createStore(reducer); // 1 is thess initial state

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