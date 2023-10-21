import TodoRow from "../todo-row/todo-row";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectTodoList } from "../../store/todo/todo.selector";
import { TodoListContainer, EmptyTodoList } from "./todo-list.style";

const TodoList = () => {
    const todoList = useSelector(selectTodoList)
    return (
        <TodoListContainer>
            {
                todoList.length ?
                    todoList.map(todo => (
                        <TodoRow key={todo.key} todo={todo} />
                    )) : (<EmptyTodoList>No Todo List Found</EmptyTodoList>)
            }
        </TodoListContainer>
    )
}

export default TodoList;