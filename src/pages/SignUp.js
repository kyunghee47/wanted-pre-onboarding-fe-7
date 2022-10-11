import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Auth from "../components/Auth.scss";
import { PostSignUp } from "../api/auth";

const SignUp = () => {
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

  const signUpubmit = () => {
    PostSignUp(user);
  };
  return (
    <div className="box">
      <div className="input-box">
        <input
          placeholder="이메일형식에 맞게 입력해주세요"
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
          placeholder="8자 이상 비밀번호를 입력해주세요"
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
          onClick={signUpubmit}
        >
          회원가입
        </button>
      </div>

      <Link to="/">이메일이 있습니다.</Link>
    </div>
  );
};
export default SignUp;
