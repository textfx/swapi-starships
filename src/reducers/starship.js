export default function starship(state={}, action) {

    switch(action.type) {
        case "SET_STARSHIP":
            return {...action.payload}
        default:
            return state;
    }
}