import { legacy_createStore } from "redux";
import { Reducer } from "./Reducer";

export let Store=legacy_createStore(Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) 