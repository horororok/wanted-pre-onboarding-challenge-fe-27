import { useState, useEffect } from "react";
import { signUp } from "../services/AuthApi";
import { useNavigate } from "react-router-dom";

const AuthSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    const isEmailValid = email.includes("@") && email.includes(".");
    const isPasswordValid = password.length >= 8;
    const isPasswordMatch = password === passwordConfirm && password !== "";
    setIsFormValid(isEmailValid && isPasswordValid && isPasswordMatch);
    setPasswordMatch(isPasswordMatch);
  }, [email, password, passwordConfirm]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      const data = await signUp(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("회원가입 성공");
        navigate("/");
      } else {
        alert("회원가입 실패: " + data.message);
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />

          {password &&
            (!passwordMatch ? (
              <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
            ) : (
              <p style={{ color: "green" }}>비밀번호가 일치합니다.</p>
            ))}
        </div>
        <button type="submit" disabled={!isFormValid}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default AuthSignUp;
