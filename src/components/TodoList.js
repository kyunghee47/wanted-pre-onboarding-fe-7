import React from "react";
import TodoListItem from "./TodoListItem";
import styled, { css } from "styled-components";

const TodoList = ({ todo, setIsUpdated }) => {
  const TodoList = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow: auto;
  `;
  return (
    <TodoList>
      {todo &&
        todo.map((todos) => (
          <TodoListItem
            todos={todos}
            key={todos.id}
            setIsUpdated={setIsUpdated}
          />
        ))}
    </TodoList>
  );
};

export default TodoList;
