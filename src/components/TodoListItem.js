import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import styled, { css } from "styled-components";
import { deleteTodo, updateTodo } from "../api/todo";
import Input from "../components/Input.scss";

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.isCompleted &&
    css`
      border: 1px solid #b1b2ff;
      color: pink;
      background-color: #b1b2ff;
    `}
`;
const Text = styled.div`
  flex: 1;
  font-size: 15px;
  color: #495057;
  ${(props) =>
    props.isCompleted &&
    css`
      color: #ced4da;
    `}
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
    let btn = Boolean(true);
    if (btn) {
      setValue({ ...value, isCheck: false });
      btn = Boolean(false);
    } else {
      setValue({ ...value, isCheck: true });
      btn = Boolean(true);
    }
  };
  return (
    <div>
      {!change ? (
        <TodoListItems>
          <CheckCircle
            onClick={onToggle}
            isCompleted={value.isCheck}
          ></CheckCircle>
          <MdEdit onClick={updateTodos}>수정</MdEdit>

          <Text isCompleted={!isCompleted}>{todo}</Text>
          <MdDelete onClick={onDelete}>삭제</MdDelete>
        </TodoListItems>
      ) : (
        <TodoListItems>
          <CheckCircle></CheckCircle>
          <input
            className="input"
            value={value.todo}
            onChange={(e) => {
              setValue({ ...value, todo: e.target.value });
            }}
          />
          <MdEdit onClick={onUpdate}>수정</MdEdit>
        </TodoListItems>
      )}
    </div>
  );
};
export default TodoListItem;
