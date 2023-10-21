import React from 'react';
import TodoInput from '../../Components/todo-input/todo-input';
import TodoList from '../../Components/todo-list/todo-list';
import { TodoAppContainer, TodoApp,TodoHeading } from './todo.style';

const Todo : React.FC = () => {
  return (
    <TodoAppContainer>
      <TodoApp>
        <TodoHeading>Todo List</TodoHeading>
        <TodoInput />
        <TodoList />
      </TodoApp>
    </TodoAppContainer>
  );
}
export default Todo;
