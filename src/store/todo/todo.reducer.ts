import { createSlice } from "@reduxjs/toolkit";

export type TodoList = {
    key: number;
    value: string;
    checked: boolean;
}

export type Todo = {
    todoList: TodoList[]
}

const addItemInList = (currentState: TodoList[], itemToAdd: string): TodoList[] => {
    if (currentState.length > 0) {
        return [...currentState, { key: (currentState[currentState.length - 1].key + 1), value: itemToAdd, checked: false }]
    }
    return [{ key: 1, value: itemToAdd, checked: false }]
}
const removeItemFromList = (currentState: TodoList[], itemToRemove: TodoList): TodoList[] => {
    return currentState.filter(state => !(state.key == itemToRemove.key))
}

const updateItemFormList = (currentState: TodoList[], itemToUpdate:TodoList) : TodoList[] => {
    return currentState.map(state => state.key == itemToUpdate.key ? { ...state, value: itemToUpdate.value } : { ...state })
}

const updateCheckedState = (currentState : TodoList[], itemToUpdate: TodoList) : TodoList[] => {
    return currentState.map(state => state.key == itemToUpdate.key ? { ...state, checked: itemToUpdate.checked } : { ...state })
}

const INITIAL_STATE: Todo = { todoList: [] }

const todoSlice = createSlice({
    name: 'todo',
    initialState: INITIAL_STATE,
    reducers: {
        addItem(state, action) {
            state.todoList = addItemInList(state.todoList, action.payload)
        },
        removeItem(state, action) {
            state.todoList = removeItemFromList(state.todoList, action.payload)
        },
        updateItem(state, action) {
            state.todoList = updateItemFormList(state.todoList, action.payload)
        },
        updateCheckStatus(state, action) {
            state.todoList = updateCheckedState(state.todoList, action.payload)
        }
    }
})

export const { addItem, removeItem, updateItem, updateCheckStatus } = todoSlice.actions
export const todoReducer = todoSlice.reducer
