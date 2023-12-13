import { Add, Remove } from "./ActionType";

export const Reducer = (state = 0, action) => {
    switch (action.type) {
        case Add:
            return state + 1
            break;
        case Remove:
            return state - 1
            break;
        default:
            return state
            break;
    }
}