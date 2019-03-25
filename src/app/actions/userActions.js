import { resolve } from "url";

export function setName(name) {
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch({
    //             type: "SET_NAME",
    //             paylodad: name 
    //         });
    //     }, 2000); // 2000 means 2 seconds
    // }
    return {
        type: "SET_NAME",
        paylodad: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(name);
            }, 2000);
        })
    };
}

export function setAge(age) {
    return {
        type: "SET_AGE",
        paylodad: age
    };
}