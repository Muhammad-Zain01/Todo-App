import { createSelector } from "reselect"
import { Root } from "../root-reducer"
import { Todo, TodoList } from "./todo.reducer"

const selectTodo = (state : Root) : Todo => (state.todo)

export const selectTodoList = createSelector(
    [selectTodo],
    (todo : Todo) : TodoList[] => (todo.todoList) 
)
