import React, { useState } from "react";
import { MdEdit, MdDelete, MdCancel } from "react-icons/md";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import styled from "styled-components";
import { deleteTodo, updateTodo } from "../api/todo";
import Input from "../components/Input.scss";

const Text = styled.div`
  flex: 1;
  font-size: 15px;
  color: #495057;
`;

const TodoListItems = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const TodoListItem = ({ todos, setIsUpdated }) => {
  const [change, setChange] = useState(false);
  const [value, setValue] = useState({
    todo: "",
    isCheck: false,
  });
  const { id, todo, isCompleted } = todos;

  const onDelete = () => {
    deleteTodo(id);
    setIsUpdated(true);
  };

  const updateTodos = () => {
    setChange(true);
  };

  const onUpdate = () => {
    updateTodo(id, value);
    setIsUpdated(true);
    setChange(false);
  };
  const onToggle = () => {
    if (value.isCheck === false) {
      setValue({ ...value, isCheck: true });
    } else {
      setValue({ ...value, isCheck: false });
    }
  };
  return (
    <div>
      {!change ? (
        <TodoListItems>
          {value.isCheck ? (
            <BsCheckCircle onClick={onToggle}></BsCheckCircle>
          ) : (
            <BsCircle onClick={onToggle}></BsCircle>
          )}

          <Text isCompleted={isCompleted}>{todo}</Text>
          <MdEdit onClick={updateTodos}>수정</MdEdit>
          <MdDelete onClick={onDelete}>삭제</MdDelete>
        </TodoListItems>
      ) : (
        <TodoListItems>
          <input
            className="input"
            value={value.todo}
            onChange={(e) => {
              setValue({ ...value, todo: e.target.value });
            }}
          />
          <MdEdit onClick={onUpdate}>수정</MdEdit>
          <MdCancel
            onClick={() => {
              setChange(false);
            }}
          ></MdCancel>
        </TodoListItems>
      )}
    </div>
  );
};
export default TodoListItem;
