import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
};
export default App;
