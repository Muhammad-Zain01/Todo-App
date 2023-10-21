import { updateItem, removeItem, updateCheckStatus } from "../../store/todo/todo.reducer"
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { Todos } from "./todo-row.style";
import { EditOutlined, SaveOutlined, DeleteOutlined } from '@ant-design/icons';
import { Input, Button, Checkbox } from "antd";
import { TodoList} from "../../store/todo/todo.reducer";
import React from "react";
import { MouseEvent } from "react";
type ComponentProp = {
    todo : TodoList;
}

const TodoRow:React.FC<ComponentProp> = ({ todo }) => {
    const { key, value, checked } = todo;
    const dispatch = useDispatch();

    const [todoInput, setTodoInput] = useState(false);
    const newItemValue = useRef("");
    
    const handleRemove = () : void => {
        dispatch(removeItem(todo))
    }
    const handleEdit = () : void => {
        setTodoInput(!todoInput)
        if(newItemValue.current){
            dispatch(updateItem({key: key, value: newItemValue.current}))
        }
    }
    const handleCheckBox = (e : MouseEvent<HTMLInputElement>) : void => {
        const checked = e.currentTarget.checked
        dispatch(updateCheckStatus({key: key, value: value, checked}))
    }
    return (
        <Todos>
            <div className="row-container">
                <Checkbox style={{marginRight: 10}} onClick={handleCheckBox} checked={checked} />
                {
                    todoInput ? 
                    (<Input type="text" defaultValue={value} onChange={(e) => {newItemValue.current = e.target.value}} />) :
                    (<div className={checked ? 'add-decoration' : ''}>{value}</div>)
                }
            </div>
            <div className="action-container">
                <Button onClick={handleEdit}>{todoInput ? <SaveOutlined /> : <EditOutlined />}</Button>
                <Button onClick={handleRemove}><DeleteOutlined /></Button>
            </div>
        </Todos>
    )
}

export default TodoRow;