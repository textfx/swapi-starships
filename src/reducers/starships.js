export default function starships(state={}, action) {

    switch(action.type) {
        case "SET_STARSHIPS":
            return {...action.payload}
        default:
            return state;
    }
}