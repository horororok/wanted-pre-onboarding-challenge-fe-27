import { useState } from "react";
import { login } from "../services/AuthApi";
import { Link, useNavigate } from "react-router-dom";

const AuthSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("로그인 성공");
        navigate("/");
      } else {
        alert("로그인 실패: " + data.message);
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>로그인</h1>
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
        <button type="submit">로그인</button>
      </form>
      <Link to="/auth-signup">계정이 없다면</Link>
    </div>
  );
};

export default AuthSignIn;
