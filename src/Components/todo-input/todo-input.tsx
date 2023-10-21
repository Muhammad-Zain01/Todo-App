import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/todo/todo.reducer";
import { TodoAppInputContainer,TodoAddButton } from "./todo-input.style";
import { Input } from "antd";
import { ChangeEvent, KeyboardEvent } from "react";

const TodoInput = () => {
    const dispatch = useDispatch();
    const [todoValue, setTodoValue] = useState('')
    const addTodoItem = () : void => {
        dispatch(addItem(todoValue))
        setTodoValue('')
    }
    const handleOnChange = (e : ChangeEvent<HTMLInputElement>) : void => setTodoValue(e.target.value)
    const handleAdd = (e : KeyboardEvent<HTMLInputElement>) : void | boolean => (e.which == 13 && addTodoItem())

    return (
        <TodoAppInputContainer>
            <Input type="text" value={todoValue} placeholder="Add Item ..." onKeyDown={handleAdd} onChange={handleOnChange} />
        </TodoAppInputContainer>
    )
}

export default TodoInput;