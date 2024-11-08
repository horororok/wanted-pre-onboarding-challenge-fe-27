import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleClickTodo = (e) => {
    if (!localStorage.getItem("token")) {
      e.preventDefault();
      alert("로그인이 필요합니다.");
      navigate("/auth-signin");
    }
  };

  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="todo" onClick={handleClickTodo}>
        Todo
      </Link>{" "}
      | <Link to="auth-signin">Sign In</Link> |{" "}
      <Link to="auth-signup">Sign Up</Link> |{" "}
      <button onClick={handleLogOut}>Log Out</button>
    </nav>
  );
};

export default Nav;
