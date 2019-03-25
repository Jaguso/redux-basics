export function setName(name) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: "SET_NAME",
                paylodad: name 
            });
        }, 2000); // 2000 means 2 seconds
    }
}

export function setAge(age) {
    return {
        type: "SET_AGE",
        paylodad: age
    };
}