import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer, Todo } from "./todo/todo.reducer";

export type Root = {
    todo : Todo 
}

export const rootReducer = combineReducers({
    todo : todoReducer
})