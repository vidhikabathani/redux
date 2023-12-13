import { Add, Remove } from "./ActionType"

export const add=()=>{
    return{
        type:Add
    }
}

export const remove=()=>{
    return{
        type:Remove
    }
}