import { legacy_createStore } from "redux";
import { Reducer } from "./Reducer";

export let Store=legacy_createStore(Reducer) 