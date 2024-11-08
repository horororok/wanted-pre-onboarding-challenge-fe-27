import { useState, useEffect } from "react";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../services/TodosApi";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "", content: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data.data);
      } catch (error) {
        console.error("리스트를 가져오던 중 에러 발생:", error);
      }
    };

    fetchTodos();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  const handleCreateTodo = async () => {
    try {
      const data = await createTodo(newTodo.title, newTodo.content);
      setTodos((prevTodos) => [...prevTodos, data.data]);
      setNewTodo({ title: "", content: "" });
    } catch (error) {
      console.error("리스트 추가 중 에러 발생:", error);
    }
  };

  const handleEditTodo = (todo) => {
    setNewTodo({ title: todo.title, content: todo.content });
    setIsEditing(true);
    setEditingTodoId(todo.id);
  };

  const handleUpdateTodo = async () => {
    try {
      const data = await updateTodo(
        editingTodoId,
        newTodo.title,
        newTodo.content
      );
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === editingTodoId ? data.data : todo))
      );
      setIsEditing(false);
      setEditingTodoId(null);
      setNewTodo({ title: "", content: "" });
    } catch (error) {
      console.error("리스트 수정 중 에러 발생:", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("리스트 삭제 중 에러 발생:", error);
    }
  };

  return (
    <div>
      <h1>투두리스트</h1>
      <div>
        <input
          type="text"
          name="title"
          value={newTodo.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="content"
          value={newTodo.content}
          onChange={handleInputChange}
          placeholder="Content"
        />
        <button onClick={isEditing ? handleUpdateTodo : handleCreateTodo}>
          {isEditing ? "수정" : "추가"}
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.content}</p>
            <button onClick={() => handleEditTodo(todo)}>수정</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
