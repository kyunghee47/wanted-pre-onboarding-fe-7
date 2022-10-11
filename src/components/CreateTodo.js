import React, { useState } from "react";
import { AAPI } from "../utils/api";
import "./Input.scss";
import { MdPlaylistAdd } from "react-icons/md";
import { getTodo, postTodo } from "../api/todo";

export default function CreateTodo({ setIsUpdated }) {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    postTodo(value);
    setIsUpdated(true);
    setValue("");
  };
  return (
    <div className="TodoInsert">
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div className="plus">
        <MdPlaylistAdd onClick={onSubmit}>등록</MdPlaylistAdd>
      </div>
    </div>
  );
}
