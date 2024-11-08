import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AuthSignIn from "./pages/AuthSignIn";
import AuthSignUp from "./pages/AuthSignUp";
import Todo from "./pages/Todo";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="auth-signin" element={<AuthSignIn />} />
          <Route path="auth-signup" element={<AuthSignUp />} />
          <Route path="todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
