import React, { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import Template from "../components/Template.scss";
import { getTodo } from "../api/todo";
import { MdLogout } from "react-icons/md";
import Input from "../components/Input.scss";
import CreateTodo from "../components/CreateTodo";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
      alert("로그인해주세요.");
    }
  }, []);

  useEffect(() => {
    setIsUpdated(false);
    getTodo(setTodo);
  }, [isUpdated]);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="Template">
      <MdLogout style={{ float: "left" }} onClick={logout}>
        로그아웃
      </MdLogout>
      <br />
      <div className="app-title">{dateString}</div>
      <CreateTodo setIsUpdated={setIsUpdated} />
      <TodoList todo={todo} setIsUpdated={setIsUpdated} />
    </div>
  );
};
export default Todo;
