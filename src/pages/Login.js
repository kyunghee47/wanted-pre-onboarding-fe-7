import React, { useEffect, useState } from "react";
import { API } from "../utils/api";
import { useNavigate, Link } from "react-router-dom";
import Auth from "../components/Auth.scss";
import { PostLogin } from "../api/auth";

const Login = () => {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/todo");
      alert("로그인한 사용자 입니다.");
    }
  }, []);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [check, setCheck] = useState({
    email: false,
    password: false,
  });

  const loginSubmit = () => {
    PostLogin(user);
  };
  return (
    <div className="box">
      <div className="input-box">
        <input
          placeholder="이메일"
          onChange={(e) => {
            const rgxexp =
              /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
            if (rgxexp.test(e.target.value) == true) {
              setUser(() => {
                return { ...user, email: e.target.value };
              });
              setCheck(() => {
                return { ...check, email: true };
              });
            } else {
              setCheck(() => {
                return { ...check, email: false };
              });
            }
          }}
        />
      </div>
      <div className="input-box">
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => {
            if (e.target.value.length >= 8) {
              setUser(() => {
                return { ...user, password: e.target.value };
              });
              setCheck(() => {
                return { ...check, password: true };
              });
            } else {
              setCheck(() => {
                return { ...check, password: false };
              });
            }
          }}
        />

        <button
          disabled={!check.email || !check.password}
          onClick={loginSubmit}
        >
          로그인
        </button>
      </div>

      <Link to="/signup">이메일이 없습니다.</Link>
    </div>
  );
};
export default Login;
