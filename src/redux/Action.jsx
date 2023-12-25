import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from "./ActionType"

export const addtask = (data) => {
    return {
        type: ADD_TASK,
        payload: data
    }
}

export const removetask = (id) => {
    return {
        type: REMOVE_TASK,
        payload: id
    }
}

export const toggletask = (id) => {
    return {
        type: TOGGLE_TASK,
        payload: id
    }
}