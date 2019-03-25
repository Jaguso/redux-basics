export function addNumber(number) {
    return {
        type: "ADD",
        paylodad: number
    };
}

export function subtractNumber(number) {
    return {
        type: "SUBTRACT",
        paylodad: number
    };
}