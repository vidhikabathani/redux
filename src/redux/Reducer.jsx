import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from "./ActionType";

let initial = {
    todo: []
}

export const Reducer = (state = initial, { type, payload }) => {
    switch (type) {
        case ADD_TASK:
            return {
                ...state,
                todo: [...state.todo, payload]
            }
        case REMOVE_TASK:
            return {
                ...state,
                todo: state.todo.filter((todo) => todo.id != payload)
            }
        case TOGGLE_TASK:
            return{
                ...state,
                todo:state.todo.map((todo)=>todo.id==payload? {...todo,isCompleted: ! (todo.isCompleted)} : todo)
            }
    }
}